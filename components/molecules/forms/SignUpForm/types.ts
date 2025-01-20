import { SignUpUserInput } from '@/components/organisms/SignUp/types'
import { FC } from 'react'

export type SignUpFormUserInput = {
  confirmPassword: string
} & SignUpUserInput

export type SignUpFormProps = FC<{
  onSubmit: (data: SignUpFormUserInput) => void
}>
