import styled from 'styled-components'

import backgroundImg from '../../assets/header-background.png'

export const HeaderContainer = styled.header`
  height: max(200px, 18.5rem);
  display: flex;
  justify-content: center;
  align-items: start;
  position: absolute;
  inset: 0 0 auto 0;
  z-index: -1;
  background: url(${backgroundImg}) left/cover no-repeat;
  padding: 4rem 2rem 0;

  @media (min-width: 1024px) {
    background-position: center;
  }
`
