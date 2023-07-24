import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.neutral600};
    height: 100vh;
    margin: 0px;
  }

  #__next {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
  }
`

export default GlobalStyles
