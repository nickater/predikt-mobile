import { FC, PropsWithChildren } from 'react'
import { QueryProvider } from './QueryProvider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useThemeColor } from '@/hooks'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const theme = useThemeColor()

  const NavTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.surface,
      primary: theme.primary,
    },
  }

  return (
    <QueryProvider>
      <KeyboardProvider>
        <ThemeProvider value={NavTheme}>
          <GestureHandlerRootView>{children}</GestureHandlerRootView>
        </ThemeProvider>
      </KeyboardProvider>
    </QueryProvider>
  )
}
