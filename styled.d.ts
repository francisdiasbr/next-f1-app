import { borderRadius } from 'brand/borderRadius'
import { breakpoints } from 'brand/breakpoints'
import { colors } from 'brand/colors'
import { fonts } from 'brand/fonts'
import { layers } from 'brand/layers'
import { spacings } from 'brand/spacings'
import { states } from 'brand/states'
import { windowSizes } from 'brand/windowSizes'
import 'styled-components'

declare module 'styled-components' {

  export interface DefaultTheme extends SkinInterfaceDeclarations {
    fonts: typeof fonts;
    layers: typeof layers;
    spacings: typeof spacings;
    windowSizes: typeof windowSizes;
    colors: typeof colors;
    borderRadius: typeof borderRadius;
    breakpoints: typeof breakpoints;
    states: typeof states;
  }

}