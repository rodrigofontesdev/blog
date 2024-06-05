import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Avatar, Bio, Card, Name, Network } from './styles'

interface Profile {
  avatar: string
  name: string | null
  username: string
  bio: string | null
  profileUrl: string
  followers: number
  company: string | null
}

export function ProfileCard() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    async function getUser() {
      const response = await api.get(`/users/${import.meta.env.VITE_GITHUB_USERNAME}`)
      const data = response.data

      setProfile({
        avatar: data.avatar_url,
        name: data.name,
        username: data.login,
        bio: data.bio,
        profileUrl: data.html_url,
        followers: data.followers,
        company: data.company,
      })
    }

    getUser()
  }, [])

  return (
    <Card>
      <Avatar>
        <img src={profile?.avatar} alt={`Foto de perfil do GitHub de ${profile?.name}`} />
      </Avatar>

      <Bio>
        <Name>
          <h1>{profile?.name ?? profile?.username}</h1>

          <a href={profile?.profileUrl} target="_blank">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
          </a>
        </Name>

        <p>{profile?.bio ?? null}</p>

        <Network>
          <li>
            <a href={`${profile?.profileUrl}?tab=repositories`} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              {profile?.username}
            </a>
          </li>

          {profile?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {profile?.company}
            </li>
          )}

          <li>
            <a href={`${profile?.profileUrl}?tab=followers`} target="_blank">
              <FontAwesomeIcon icon={faUserGroup} />
              {profile?.followers} {profile?.followers === 1 ? 'seguidor' : 'seguidores'}
            </a>
          </li>
        </Network>
      </Bio>
    </Card>
  )
}
