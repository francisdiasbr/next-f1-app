import { css } from 'styled-components'

import { colors } from './colors'

const focus = css`
  outline: 4px solid ${colors.blue300};
  outline-offset: 1px;
`

const focusInsideBox = css`
  outline: 4px solid ${colors.blue300};
  outline-offset: -4px;
`

export const states = {
  focus,
  focusInsideBox
}
