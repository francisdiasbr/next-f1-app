import AntdThemeProvider from 'providers/AntdTheme'
import ThemeProvider from 'providers/Theme'
import React from 'react'

const PageIndex = ({}) => {
  return (
    <ThemeProvider>
      <AntdThemeProvider>
        <pre>index page</pre>
      </AntdThemeProvider>
    </ThemeProvider>
  )
}

export default PageIndex