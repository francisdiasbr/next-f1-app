import { F1AppBrand } from 'brand'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const ApplicationThemeProvider = (props) => {
  return <ThemeProvider theme={F1AppBrand}>{props.children}</ThemeProvider>
}

export default ApplicationThemeProvider
