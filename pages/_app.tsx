import AntdThemeProvider from 'providers/AntdTheme'
import ThemeProvider from 'providers/Theme'
import GlobalStyles from 'providers/Theme/globals'

function SkinInterfaceApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AntdThemeProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AntdThemeProvider>
    </ThemeProvider>
  )
}

export default SkinInterfaceApp