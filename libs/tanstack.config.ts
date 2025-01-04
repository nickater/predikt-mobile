import { QueryClient } from '@tanstack/react-query'

const tanstackQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
})

export { tanstackQueryClient }
