import React from 'react'
import { ThemeProvider } from 'styled-components'
import { F1AppBrand } from 'brand'

const ApplicationThemeProvider = (props) => {
  return <ThemeProvider theme={F1AppBrand}>{props.children}</ThemeProvider>
}

export default ApplicationThemeProvider
