import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme['slate-700']};
  padding: 2.375rem 2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme['slate-500']};
    transition: border 400ms;
  }
`

export const Body = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  pointer-events: none;

  ul {
    list-style: inside;

    li.task-list-item {
      list-style: none;
    }
  }

  a {
    color: ${(props) => props.theme['slate-300']};
  }

  code {
    background-color: ${(props) => props.theme['slate-500']};
    padding: 2px 4px;
    border-radius: 4px;
  }
`

export const Title = styled.h3`
  font-size: 1.25rem;

  span {
    display: block;
    float: right;
    color: ${(props) => props.theme['slate-400']};
    font-size: 0.875rem;
    padding-left: 0.5rem;
    margin-top: 0.375rem;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (max-width: 640px) {
    span {
      float: none;
      padding-left: 0;
      margin-top: 0;
    }
  }
`
