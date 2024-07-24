import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Skeleton } from '../../../../components/Skeleton'
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

const repoOwner = import.meta.env.VITE_GITHUB_USERNAME

export function ProfileCard() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getUser() {
      await api.get(`/users/${repoOwner}`).then((response) => {
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

        setIsLoading(false)
      })
    }

    getUser()
  }, [])

  return (
    <Card>
      {isLoading ? (
        <Skeleton width={148} height={148} radii={10} />
      ) : (
        <Avatar>
          <img
            src={profile?.avatar}
            alt={`Foto de perfil do GitHub de ${profile?.name}`}
            width={148}
            height={148}
          />
        </Avatar>
      )}

      <Bio>
        <Name>
          {isLoading ? (
            <Skeleton width={320} height={31} />
          ) : (
            <>
              <h1>{profile?.name ?? profile?.username}</h1>

              <a href={profile?.profileUrl} target="_blank">
                GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
              </a>
            </>
          )}
        </Name>

        {isLoading ? <Skeleton width={620} height={25} /> : <p>{profile?.bio ?? null}</p>}

        <Network>
          {isLoading ? (
            <Skeleton width={480} height={25} />
          ) : (
            <>
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
            </>
          )}
        </Network>
      </Bio>
    </Card>
  )
}
