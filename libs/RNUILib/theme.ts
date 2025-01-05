import { ThemeManager } from 'react-native-ui-lib'

const theme = {
  primary: '#0d1b2a',
  secondary: '#1b263b',
  accent: '#415a77',
  background: '#e0e1dd',
  surface: '#778da9',
  textPrimary: '#1b263b',
  textSecondary: '#415a77',
  divider: '#e0e1dd',
}

ThemeManager.setComponentTheme('RadioButton', (props, context) => {
  return {
    color: theme.primary,
  }
})

ThemeManager.setComponentTheme('Button', (props, context) => {
  return {
    backgroundColor: theme.primary,
    color: theme.background,
  }
})
