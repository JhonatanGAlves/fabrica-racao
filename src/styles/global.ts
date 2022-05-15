import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52A1B;
    --gray-0: #FFFFFF;
    --gray-100: #F2F2F2;
    --gray-300: #EBEBEB;
    --gray-500: #C4C4C4;
    --gray-800: #303030;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Por padrão, o font-size é 16px.
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px == 16*0,93.75
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px == 16*0,875
    }
  }

  body {
    background: var(--gray-100);
    -webkit-font-smoothing: antialiased; // Deixar o texto mais nítido.
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
`