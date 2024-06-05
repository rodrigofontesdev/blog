import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'
import { api } from '../../lib/axios'
import { PostInfo } from './components/PostInfo'
import { Container, PostBody } from './styles'

interface Issue {
  title: string
  body: string
  url: string
  comments: number
  createdAt: string
  author: {
    username: string
    profileUrl: string
  }
}

const repoOwner = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPO

export function Post() {
  const [issue, setIssue] = useState<Issue | null>()
  const { postId } = useParams()

  useEffect(() => {
    async function getIssue() {
      const response = await api.get(`/repos/${repoOwner}/${repoName}/issues/${postId}`)
      const data = response.data

      setIssue({
        title: data.title,
        body: data.body,
        url: data.html_url,
        comments: data.comments,
        createdAt: data.created_at,
        author: {
          username: data.assignee.login,
          profileUrl: data.assignee.html_url,
        },
      })
    }

    getIssue()
  }, [postId])

  return (
    <main>
      <Container>
        {issue && (
          <PostInfo
            title={issue.title}
            url={issue.url}
            comments={issue.comments}
            author={issue.author}
            createdAt={issue.createdAt}
          />
        )}

        <PostBody>
          <Markdown
            remarkPlugins={[
              remarkGfm,
              remarkBreaks,
              [remarkGithub, { repository: `${repoOwner}/${repoName}` }],
            ]}
            components={{
              code(props) {
                const { children, className, node, ref, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')

                return match ? (
                  <SyntaxHighlighter {...rest} PreTag="div" language={match[1]} style={lucario}>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...rest}>
                    {children}
                  </code>
                )
              },
              a({ node, children, ...props }) {
                return (
                  <a target="_blank" {...props}>
                    {children}
                  </a>
                )
              },
            }}
          >
            {issue?.body}
          </Markdown>
        </PostBody>
      </Container>
    </main>
  )
}
