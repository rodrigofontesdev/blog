import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: calc(54rem + 4rem);
  margin: max(150px, 13rem) auto 0;
  padding-right: 2rem;
  padding-left: 2rem;
`

export const ErrorMessage = styled.section`
  background-color: ${(props) => props.theme['slate-800']};
  padding: 4rem 2rem;
  margin-bottom: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

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
