import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { Container, Posts, PostsGrid, SearchForm } from './styles'

export function Home() {
  return (
    <main>
      <Container>
        <ProfileCard />

        <Posts>
          <header>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </header>

          <SearchForm>
            <input type="search" name="s" placeholder="Buscar conteúdo" />
          </SearchForm>

          <PostsGrid>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </PostsGrid>
        </Posts>
      </Container>
    </main>
  )
}
