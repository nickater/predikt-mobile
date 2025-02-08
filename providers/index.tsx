import { FC, PropsWithChildren } from 'react'
import { QueryProvider } from './QueryProvider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useThemeColor } from '@/hooks'
import { BottomSheetProvider } from './BottomSheetProvider'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const theme = useThemeColor()

  const NavTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.background,
      primary: theme.primary,
    },
  }

  return (
    <QueryProvider>
      <GestureHandlerRootView>
        <BottomSheetProvider>
          <KeyboardProvider>
            <ThemeProvider value={NavTheme}>{children}</ThemeProvider>
          </KeyboardProvider>
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </QueryProvider>
  )
}
