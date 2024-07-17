import { ProfileCard } from './components/ProfileCard'
import { Container } from './styles'
import { Posts } from './components/Posts'

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
