import { Theme } from 'src/themes';
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}