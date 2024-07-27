import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme['slate-800']};
  padding: 2rem;
  margin-bottom: 4.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Avatar = styled.div`
  width: min(9.25rem, 100%);
  aspect-ratio: 1 / 1;

  img {
    border-radius: 8px;
  }
`

export const Bio = styled.div`
  flex: 1;
`

export const Name = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;

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
      margin-left: 0.5rem;
    }
  }
`

export const Network = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 0.75rem;
  margin-top: 1.5rem;

  li {
    color: ${(props) => props.theme['slate-200']};
    list-style: none;

    a {
      color: ${(props) => props.theme['slate-200']};
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom-color: ${(props) => props.theme['slate-200']};
        transition: border 400ms;
      }
    }

    svg {
      color: ${(props) => props.theme['slate-500']};
      margin-right: 0.5rem;
    }
  }
`
