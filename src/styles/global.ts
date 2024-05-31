import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['slate-900']};
        color: ${(props) => props.theme['slate-300']};
        font-family: ${(props) => props.theme['font-primary']};
        font-weight: 400;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6  {
        color: ${(props) => props.theme['slate-50']};
        font-weight: 700;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    input, textarea, button {
        font-family: ${(props) => props.theme['font-primary']};
        outline: 0;
    }

    button {
        cursor: pointer;
    }
`
