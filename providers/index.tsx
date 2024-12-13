import { FC, PropsWithChildren } from 'react'
import { QueryProvider } from './QueryProvider'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  console.log('Providers')
  return <QueryProvider>{children}</QueryProvider>
}
