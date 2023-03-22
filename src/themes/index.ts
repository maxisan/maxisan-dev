import { DefaultTheme } from "styled-components";

type Color = {
  base: string,
  dark?: string,
  light?: string
}

export interface Theme {
  colors: {
    font: Color;
    surface: Color;
    accent: Color;
    background: Color;
    badge: Color;
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    font: {
      base: '#ffffff'
    },
    surface: {
      base: '#00130f',
      light: '#00271e'
    },
    accent: {
      base: '#02c39a',
      dark: '#029c7b',
      light: '#67dbc2'
    },
    background: {
      base: '#000000'
    },
    badge: {
      base: '#806503'
    }
  }
}