import { SignUpProps } from '@/hooks/auth/types'

export type SignUpUserInput = {
  email: string
  username: string
} & SignUpProps
