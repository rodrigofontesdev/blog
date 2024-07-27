import { Posts } from './components/Posts'
import { ProfileCard } from './components/ProfileCard'
import { Container } from './styles'

export function Home() {
  return (
    <main>
      <Container>
        <ProfileCard />
        <Posts />
      </Container>
    </main>
  )
}
