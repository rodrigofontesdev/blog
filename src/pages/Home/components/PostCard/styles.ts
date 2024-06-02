import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  width: 100%;
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

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 1rem;

  h3 {
    flex-grow: 1;
    width: 80%;
    font-size: 1.25rem;
  }

  span {
    flex-shrink: 0;
    color: ${(props) => props.theme['slate-400']};
    font-size: 0.875rem;
  }
`
