import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Bio, Card, Name, Network } from './styles'

export function ProfileCard() {
  return (
    <Card>
      <Avatar>
        <img
          src="https://avatars.githubusercontent.com/u/17281370"
          alt="Foto de perfil do Github de Cameron Williamson"
        />
      </Avatar>

      <Bio>
        <Name>
          <h1>Cameron Williamson</h1>

          <a href="#" target="_blank">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
          </a>
        </Name>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
          dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>

        <Network>
          <li>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </a>
          </li>
        </Network>
      </Bio>
    </Card>
  )
}
