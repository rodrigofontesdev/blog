import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../../../lib/axios'
import { PostCard } from '../PostCard'
import { PostsContainer, PostsEmpty, PostsGrid, SearchForm } from './styles'

export interface IssueResponse {
  number: number
  title: string
  body: string | null
  created_at: string
}

const repoOwner = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPO

export function Posts() {
  const [issues, setIssues] = useState<IssueResponse[]>([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getIssues() {
      setIsLoading(true)

      await api
        .get(`/search/issues`, {
          params: {
            q: `${search} is:issue repo:${repoOwner}/${repoName}`,
            sort: 'created',
            per_page: 12,
          },
        })
        .then((response) => {
          setTotal(response.data.total_count)
          setIssues(
            response.data.items.map((issue: IssueResponse) => {
              return {
                number: issue.number,
                title: issue.title,
                body: issue.body,
                created_at: issue.created_at,
              }
            })
          )
        })
        .finally(() => setIsLoading(false))
    }

    getIssues()
  }, [search])

  return (
    <PostsContainer>
      <header>
        <h2>Publicações</h2>
        <span>
          {total} {total === 1 ? 'publicação' : 'publicações'}
        </span>
      </header>

      <SearchForm>
        <input
          type="search"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchForm>

      {isLoading ? (
        'carregando...'
      ) : issues.length > 0 ? (
        <PostsGrid>
          {issues.map((issue: IssueResponse) => (
            <Link to={`/post/${issue.number}`} key={issue.number}>
              <PostCard title={issue.title} body={issue.body} createdAt={issue.created_at} />
            </Link>
          ))}
        </PostsGrid>
      ) : (
        <PostsEmpty>
          <FontAwesomeIcon icon={faFaceFrownOpen} fontSize={48} />
          Nenhuma publicação encontrada!
        </PostsEmpty>
      )}
    </PostsContainer>
  )
}
