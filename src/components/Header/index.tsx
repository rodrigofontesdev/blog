import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logoImg from '@assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="GitHub Blog" width={148} height={98} />
      </Link>
    </HeaderContainer>
  )
}
