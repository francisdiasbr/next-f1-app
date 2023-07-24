import { ConfigProvider, ThemeConfig } from 'antd'
import React from 'react'

import { F1AppBrand } from '../../brand/index'

const AntDesignConfigurationProvider = (props) => {
  const { colors } = F1AppBrand

  const antdConfig: ThemeConfig = {
    token: {
      colorPrimary: colors.blue500,
      colorBorder: colors.blue300,

      'blue-1': colors.blue100,
      'blue-2': colors.blue200,
      'blue-3': colors.blue300,
      'blue-4': colors.blue400,
      'blue-5': colors.blue500,
      'blue-6': colors.blue600
    }
  }

  return <ConfigProvider theme={antdConfig}>{props.children}</ConfigProvider>
}

export default AntDesignConfigurationProvider
