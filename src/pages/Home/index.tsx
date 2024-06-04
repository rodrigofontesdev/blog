import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { Container, Posts, PostsGrid, SearchForm } from './styles'

export interface IssueResponse {
  id: number
  title: string
  body: string | null
  created_at: string
}

interface SearchFormData {
  search: string
}

const repoOwner = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPO

export function Home() {
  const [issues, setIssues] = useState<IssueResponse[]>([])
  const { register, watch } = useForm<SearchFormData>({
    defaultValues: {
      search: '',
    },
  })

  const search = watch('search')

  useEffect(() => {
    async function getIssues() {
      const response = await api.get(`/search/issues`, {
        params: {
          q: `${search} is:issue repo:${repoOwner}/${repoName}`,
          sort: 'created',
          per_page: 12,
        },
      })
      const data = response.data

      setIssues(
        data.items.map((issue: IssueResponse) => {
          return {
            id: issue.id,
            title: issue.title,
            body: issue.body,
            created_at: issue.created_at,
          }
        })
      )
    }

    getIssues()
  }, [search])

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
            <input type="search" placeholder="Buscar conteúdo" {...register('search')} />
          </SearchForm>

          <PostsGrid>
            {issues.map((issue: IssueResponse) => (
              <Link to={`/post/${issue.id}`} key={issue.id}>
                <PostCard title={issue.title} body={issue.body} createdAt={issue.created_at} />
              </Link>
            ))}
          </PostsGrid>
        </Posts>
      </Container>
    </main>
  )
}
