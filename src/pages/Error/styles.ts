import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: calc(54rem + 4rem);
  margin: 28.125rem auto 0;
  padding-right: 2rem;
  padding-left: 2rem;
`

export const ErrorMessage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    color: ${(props) => props.theme['blue-500']};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: ${(props) => props.theme['blue-500']};
      transition: border 400ms;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`
