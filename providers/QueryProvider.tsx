import { addEventListener } from '@react-native-community/netinfo'
import {
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
      },
    },
  })

  onlineManager.setEventListener((setOnline) => {
    return addEventListener((state) => {
      setOnline(!!state.isConnected)
    })
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
