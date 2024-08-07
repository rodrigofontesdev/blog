import styled from 'styled-components'

export const PostsContainer = styled.section`
  padding-bottom: 15rem;

  > header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    column-gap: 0.5rem;
    margin-bottom: 0.75rem;

    h2 {
      color: ${(props) => props.theme['slate-200']};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme['slate-400']};
      font-size: 0.875rem;
    }
  }
`

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 3rem;

  input {
    width: 100%;
    background-color: ${(props) => props.theme['slate-950']};
    color: ${(props) => props.theme['slate-300']};
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['slate-600']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['slate-500']};
    }

    &:hover,
    &:focus {
      border-color: ${(props) => props.theme['blue-500']};
      transition: color 400ms, border 400ms;
    }
  }
`

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  > a {
    all: unset;
  }
`

export const PostsEmpty = styled.span`
  display: block;
  font-weight: 700;
  text-align: center;

  > svg {
    display: block;
    margin: 0 auto 1.5rem;
  }
`
