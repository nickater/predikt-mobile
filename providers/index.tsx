import { FC, PropsWithChildren } from 'react'
import { QueryProvider } from './QueryProvider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from "react-native-keyboard-controller";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryProvider>
      <KeyboardProvider>
      <GestureHandlerRootView>{children}</GestureHandlerRootView>
      </KeyboardProvider>
    </QueryProvider>
  )
}