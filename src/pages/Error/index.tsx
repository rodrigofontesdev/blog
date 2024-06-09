import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container, ErrorMessage } from './styles'

export function Error() {
  const error = useRouteError()

  return (
    <>
      <Header />

      <main>
        <Container>
          <ErrorMessage>
            {isRouteErrorResponse(error) ? (
              <>
                <h1>
                  {error.status} | {error.statusText}
                </h1>

                <p>Oops, essa não é a página que você está procurando.</p>

                <Link to="/">
                  <FontAwesomeIcon icon={faHouse} fontSize={12} />
                  Acessar Home
                </Link>
              </>
            ) : (
              <h1>Ocorreu um erro inesperado</h1>
            )}
          </ErrorMessage>
        </Container>
      </main>
    </>
  )
}
