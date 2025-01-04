import { tanstackQueryClient } from '@/libs/tanstack.config'
import { addEventListener } from '@react-native-community/netinfo'
import { onlineManager, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  onlineManager.setEventListener((setOnline) => {
    return addEventListener((state) => {
      setOnline(!!state.isConnected)
    })
  })

  return (
    <QueryClientProvider client={tanstackQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
