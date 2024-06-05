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
import { Card, Metadata, Navigation } from './styles'

interface PostProps {
  title: string
  url: string
  comments: number
  author: {
    username: string
    profileUrl: string
  }
  createdAt: string
}

export function PostInfo({ title, url, comments, author, createdAt }: PostProps) {
  return (
    <Card>
      <Navigation>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
          VOLTAR
        </Link>

        <a href={url} target="_blank">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
        </a>
      </Navigation>

      <h1>{title}</h1>

      <Metadata>
        <li>
          <a href={`${author.profileUrl}?tab=repositories`} target="_blank">
            <FontAwesomeIcon icon={faGithub} /> {author.username}
          </a>
        </li>

        <li>
          <FontAwesomeIcon icon={faCalendarDay} />{' '}
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </li>

        <li>
          <FontAwesomeIcon icon={faComment} /> {comments}{' '}
          {comments === 1 ? 'comentário' : 'comentários'}
        </li>
      </Metadata>
    </Card>
  )
}
