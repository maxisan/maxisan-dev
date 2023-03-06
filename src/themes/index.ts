import { DefaultTheme } from "styled-components"

export interface Theme {
  colors: {
    font: string;
    surface: string;
    accent: string;
    background: string;
    'background-lighter': string;
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    font: '#ffffff',
    surface: '#00130f',
    accent: '#02c39a',
    background: '#000000',
    'background-lighter': '#00271e'
  }
}