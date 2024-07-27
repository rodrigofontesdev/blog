import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Skeleton } from '../../../../components/Skeleton'
import { api } from '../../../../lib/axios'
import { PostCard } from '../PostCard'
import { PostsContainer, PostsEmpty, PostsGrid, SearchForm } from './styles'

export type IssueResponse = {
  number: number
  title: string
  body: string | null
  created_at: string
}

const repoOwner = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPO

export function Posts() {
  const [issues, setIssues] = useState<IssueResponse[]>([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const total = issues.length

  useEffect(() => {
    async function getIssues() {
      await api
        .get(`/search/issues`, {
          params: {
            q: `${search} is:issue repo:${repoOwner}/${repoName}`,
            sort: 'created',
            per_page: 12,
          },
        })
        .then((response) => {
          const items = response.data.items.map((issue: IssueResponse) => {
            return {
              number: issue.number,
              title: issue.title,
              body: issue.body,
              created_at: issue.created_at,
            }
          })

          setIssues(items)
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
        <PostsGrid>
          {Array.from({ length: 12 }, (_, i) => i).map((k) => (
            <Skeleton key={k} width={416} height={196} />
          ))}
        </PostsGrid>
      ) : total > 0 ? (
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
