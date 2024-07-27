import { useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'
import { Skeleton } from '../../components/Skeleton'
import { api } from '../../lib/axios'
import { PostInfo } from './components/PostInfo'
import { Container, ContentLoading, PostBody } from './styles'

interface Issue {
  title: string
  body: string
  url: string
  comments: number
  createdAt: string
  username: string
  profileUrl: string
}

const repoOwner = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPO

export function Post() {
  const [issue, setIssue] = useState<Issue | null>()
  const [isLoading, setIsLoading] = useState(true)
  const { postId } = useParams()

  async function getIssue() {
    await api.get(`/repos/${repoOwner}/${repoName}/issues/${postId}`).then((response) => {
      const data = response.data

      setIssue({
        title: data.title,
        body: data.body,
        url: data.html_url,
        comments: data.comments,
        createdAt: data.created_at,
        username: data.assignee.login,
        profileUrl: data.assignee.html_url,
      })

      setIsLoading(false)
    })
  }

  getIssue()

  return (
    <main>
      <Container>
        <PostInfo
          title={issue?.title ?? ''}
          url={issue?.url ?? ''}
          comments={issue?.comments ?? 0}
          username={issue?.username ?? ''}
          profileUrl={issue?.profileUrl ?? ''}
          createdAt={issue?.createdAt ?? ''}
          isFetchingData={isLoading}
        />

        <PostBody>
          {isLoading ? (
            <ContentLoading>
              <Skeleton width={800} height={25} />
              <Skeleton width={800} height={75} />
              <Skeleton width={800} height={50} />
              <Skeleton width={800} height={125} />
              <Skeleton width={800} height={25} />
              <Skeleton width={800} height={50} />
              <Skeleton width={800} height={100} />
              <Skeleton width={800} height={50} />
              <Skeleton width={800} height={50} />
              <Skeleton width={800} height={25} />
            </ContentLoading>
          ) : (
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
          )}
        </PostBody>
      </Container>
    </main>
  )
}
