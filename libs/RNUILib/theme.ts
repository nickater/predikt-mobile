import { Colors } from 'react-native-ui-lib'

export type Theme = {
  primary: string
  primaryVariant: string
  secondary: string
  accent: string
  background: string
  surface: string
  textPrimary: string
  textSecondary: string
  divider: string
}

const lightTheme: Theme = {
  primary: '#f0ebd8',
  primaryVariant: '#d6ccaf',
  secondary: '#1d2d44',
  accent: '#748cab',
  background: '#ffffff',
  surface: '#e6e6e6',
  textPrimary: '#0d1321',
  textSecondary: '#3e5c76',
  divider: '#d3d3d3',
}

const darkTheme: Theme = {
  primary: '#d6ccaf',
  primaryVariant: '#f0ebd8',
  secondary: '#162238',
  accent: '#5a7b99',
  background: '#0d1321',
  surface: '#2c4a5e',
  textPrimary: '#e0e1dd',
  textSecondary: '#5a7b99',
  divider: '#e0e1dd',
}

export const theme = {
  light: lightTheme,
  dark: darkTheme,
}

Colors.loadSchemes({
  light: lightTheme,
  dark: darkTheme,
})
