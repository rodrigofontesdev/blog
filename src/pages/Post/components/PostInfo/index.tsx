import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Card, Metadata, Navigation } from './styles'

export function PostInfo() {
  return (
    <Card>
      <Navigation>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
          VOLTAR
        </Link>

        <a href="#" target="_blank">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
        </a>
      </Navigation>

      <h1>JavaScript data types and data structures</h1>

      <Metadata>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faGithub} /> cameronwll
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faComment} /> 5 comentários
          </a>
        </li>
      </Metadata>
    </Card>
  )
}
