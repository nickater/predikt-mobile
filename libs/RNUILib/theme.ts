import { Colors } from 'react-native-ui-lib'

export type Theme = {
  primary: string
  primaryVariant: string
  secondary: string
  secondaryVariant: string
  accent: string
  background: string
  backgroundVariant: string
  surface: string
  surfaceVariant: string
  textPrimary: string
  textSecondary: string
  divider: string
  error: string
  success: string
}

const lightTheme: Theme = {
  primary: '#f0ebd8',
  primaryVariant: '#d6ccaf',
  secondary: '#1d2d44',
  secondaryVariant: '#162238',
  accent: '#748cab',
  background: '#ffffff',
  backgroundVariant: '#f0ebd8',
  surface: '#e6e6e6',
  surfaceVariant: '#d6ccaf',
  textPrimary: '#0d1321',
  textSecondary: '#3e5c76',
  divider: '#d3d3d3',
  error: '#ff0000',
  success: '#00ff00',
}

const darkTheme: Theme = {
  primary: '#d6ccaf',
  primaryVariant: '#f0ebd8',
  secondary: '#162238',
  secondaryVariant: '#1d2d44',
  accent: '#5a7b99',
  background: '#0d1321',
  backgroundVariant: '#1d2d44',
  surface: '#2c4a5e',
  surfaceVariant: '#162238',
  textPrimary: '#e0e1dd',
  textSecondary: '#5a7b99',
  divider: '#e0e1dd',
  error: '#ff0000',
  success: '#00ff00',
}

export const theme = {
  light: lightTheme,
  dark: darkTheme,
}

Colors.loadSchemes({
  light: lightTheme,
  dark: darkTheme,
})
