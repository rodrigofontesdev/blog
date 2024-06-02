import { PostInfo } from './components/PostInfo'
import { Container, PostBody } from './styles'

export function Post() {
  return (
    <main>
      <Container>
        <PostInfo />

        <PostBody></PostBody>
      </Container>
    </main>
  )
}
