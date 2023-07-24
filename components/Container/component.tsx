import React from 'react'

import * as S from './styles'

export const Container = ({ header, content, footer }) => {
  return (
    <>
      <S.Header>{header}</S.Header>
      <S.Main>
        <S.Section>{content}</S.Section>
      </S.Main>
      <S.Footer>{footer}</S.Footer>
    </>
  )
}
