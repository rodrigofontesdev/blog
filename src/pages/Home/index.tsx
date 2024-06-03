import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { Container, Posts, PostsGrid, SearchForm } from './styles'

export interface IssueResponse {
  id: number
  title: string
  created_at: string
  body: string | null
}

const repoOwner = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPO

export function Home() {
  const [issues, setIssues] = useState<IssueResponse[]>([])

  useEffect(() => {
    async function getIssues() {
      const response = await api.get(`/repos/${repoOwner}/${repoName}/issues`, {
        params: {
          state: 'all',
          per_page: 20,
        },
      })
      const data = response.data

      setIssues(
        data.map((issue: IssueResponse) => {
          return {
            id: issue.id,
            title: issue.title,
            created_at: issue.created_at,
            body: issue.body,
          }
        })
      )
    }

    getIssues()
  }, [])

  return (
    <main>
      <Container>
        <ProfileCard />

        <Posts>
          <header>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </header>

          <SearchForm>
            <input type="search" name="s" placeholder="Buscar conteúdo" />
          </SearchForm>

          <PostsGrid>
            {issues.map((issue: IssueResponse) => (
              <Link to={`/post/${issue.id}`} key={issue.id}>
                <PostCard title={issue.title} createdAt={issue.created_at} body={issue.body} />
              </Link>
            ))}
          </PostsGrid>
        </Posts>
      </Container>
    </main>
  )
}
