import { ClickableAssetProps } from 'components/ClickableAsset/types'
import React from 'react'

export const ClickableAsset: React.FC<ClickableAssetProps> = ({ alt, height, href, src, width }) => {
  return (
    <a href={href}>
      <img
        alt={alt}
        height={height}
        width={width}
        src={src}
      />
    </a>
  )
}