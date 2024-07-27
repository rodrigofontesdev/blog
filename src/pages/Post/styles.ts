import styled from 'styled-components'

export const Container = styled.div`
  max-width: calc(54rem + 4rem);
  margin: max(150px, 13rem) auto 0;
  padding-right: 2rem;
  padding-left: 2rem;
`

export const PostBody = styled.article`
  padding: 2.5rem 2rem 10.5rem 2rem;

  p,
  pre,
  ul,
  ol {
    margin-bottom: 1.5rem;
  }

  ul {
    padding-left: 2rem;
  }

  ul.contains-task-list {
    padding-left: 1rem;

    li {
      list-style: none;
    }
  }

  ol {
    padding-left: 2rem;

    li {
      list-style: decimal;
    }
  }

  li {
    margin-top: 0.25rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.875rem;
  }

  h6 {
    font-size: 0.75rem;
  }

  a {
    color: ${(props) => props.theme['blue-500']};
  }

  code {
    background-color: ${(props) => props.theme['slate-500']};
    padding: 2px 4px;
    border-radius: 4px;
  }

  blockquote {
    padding: 0 1rem;
    border-left: 4px solid ${(props) => props.theme['slate-500']};
  }

  table {
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    margin-bottom: 1.5rem;

    tr {
      background-color: ${(props) => props.theme['slate-900']};
      border-top: 1px solid ${(props) => props.theme['slate-700']};
    }

    tr:nth-child(2n) {
      background-color: ${(props) => props.theme['slate-800']};
    }

    th,
    td {
      font-weight: 700;
      text-align: left;
      padding: 0.375rem 0.75rem;
      border: 1px solid ${(props) => props.theme['slate-700']};
    }
  }
`

export const ContentLoading = styled.div`
  display: grid;
  gap: 1.5rem;
`
