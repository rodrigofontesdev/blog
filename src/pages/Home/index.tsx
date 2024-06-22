import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { Container, Posts, PostsEmpty, PostsGrid, SearchForm } from './styles'

export interface IssueResponse {
  number: number
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
  const [total, setTotal] = useState(0)
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
            number: issue.number,
            title: issue.title,
            body: issue.body,
            created_at: issue.created_at,
          }
        })
      )
      setTotal(data.total_count)
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
            <span>
              {total} {total === 1 ? 'publicação' : 'publicações'}
            </span>
          </header>

          <SearchForm>
            <input type="search" placeholder="Buscar conteúdo" {...register('search')} />
          </SearchForm>

          {issues.length > 0 ? (
            <PostsGrid>
              {issues.map((issue: IssueResponse) => (
                <Link to={`/post/${issue.number}`} key={issue.number}>
                  <PostCard title={issue.title} body={issue.body} createdAt={issue.created_at} />
                </Link>
              ))}
            </PostsGrid>
          ) : (
            <PostsEmpty>Nenhuma publicação encontrada!</PostsEmpty>
          )}
        </Posts>
      </Container>
    </main>
  )
}
