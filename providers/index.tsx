import { FC, PropsWithChildren } from 'react'
import { QueryProvider } from './QueryProvider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryProvider>
      <GestureHandlerRootView>{children}</GestureHandlerRootView>
    </QueryProvider>
  )
}
