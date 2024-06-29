import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme['slate-800']};
  padding: 2rem;
  margin-bottom: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.25rem;

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

    &:first-of-type {
      svg {
        margin-right: 0.5rem;
      }
    }

    &:last-of-type {
      svg {
        margin-left: 0.5rem;
      }
    }
  }
`

export const Metadata = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.75rem;

  li {
    color: ${(props) => props.theme['slate-400']};
    list-style: none;

    &:nth-of-type(2) {
      span {
        display: inline-block;

        &::first-letter {
          text-transform: uppercase;
        }
      }
    }

    a {
      color: ${(props) => props.theme['slate-400']};
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom-color: ${(props) => props.theme['slate-400']};
        transition: border 400ms;
      }
    }

    svg {
      color: ${(props) => props.theme['slate-500']};
      margin-right: 0.5rem;
    }
  }
`
