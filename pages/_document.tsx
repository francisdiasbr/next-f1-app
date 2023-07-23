import { StyleProvider, createCache } from '@ant-design/cssinjs';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { doExtraStyle } from 'scripts/getAntdCss'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

class DocumentComponent extends Document {

  static async getInitialProps(ctx) {

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    const antdChache = createCache()

    try {
      ctx.renderPage = () => originalRenderPage({ enhanceApp: (App) => (props) => (
        <StyleSheetManager sheet={sheet.instance} disableVendorPrefixes={true}>
          <StyleProvider cache={antdChache}>
            <App {...props} />
          </StyleProvider>
        </StyleSheetManager>
      )})

      const initialProps = await Document.getInitialProps(ctx)
      const antdFileName = doExtraStyle({ cache: antdChache })
      const antdStyleElement = <link key='antdStylesheet' rel='stylesheet' href={`/${antdFileName}`} />

      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          sheet.getStyleElement(),
          antdStyleElement
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='pt-br' dir='ltr'>
        <Head>
          <title>poc-antd-next-styled</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentComponent
