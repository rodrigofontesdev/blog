import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { Skeleton } from '../../../../components/Skeleton'
import { Card, Metadata, Navigation } from './styles'

type PostProps = {
  title: string
  url: string
  comments: number
  username: string
  profileUrl: string
  createdAt: string
  isFetchingData: boolean
}

export function PostInfo({
  title,
  url,
  comments,
  username,
  profileUrl,
  createdAt,
  isFetchingData,
}: PostProps) {
  return (
    <Card>
      <Navigation>
        {isFetchingData ? (
          <Skeleton width={800} height={20} />
        ) : (
          <>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
              VOLTAR
            </Link>

            <a href={url} target="_blank">
              VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
            </a>
          </>
        )}
      </Navigation>

      <h1>{isFetchingData ? <Skeleton width={700} height={31} /> : title}</h1>

      <Metadata>
        {isFetchingData ? (
          <Skeleton width={500} height={25} />
        ) : (
          <>
            <li>
              <a href={`${profileUrl}?tab=repositories`} target="_blank">
                <FontAwesomeIcon icon={faGithub} /> {username}
              </a>
            </li>

            <li>
              <FontAwesomeIcon icon={faCalendarDay} />{' '}
              <span>
                {formatDistanceToNow(new Date(createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </li>

            <li>
              <FontAwesomeIcon icon={faComment} /> {comments}{' '}
              {comments === 1 ? 'comentário' : 'comentários'}
            </li>
          </>
        )}
      </Metadata>
    </Card>
  )
}
