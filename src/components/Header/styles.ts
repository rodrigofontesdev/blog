import styled from 'styled-components'

import headerBackgroundImg from '../../assets/header-background.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 296px;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${headerBackgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 4rem;
  padding-right: 2rem;
  padding-left: 2rem;
  z-index: -1;

  @media (max-width: 1024px) {
    background-position: left;
  }
`
