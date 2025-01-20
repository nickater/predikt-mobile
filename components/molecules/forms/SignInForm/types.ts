import { SignInUserInput } from '@/components/organisms/SignIn/types'
import { FC } from 'react'

export type SignInFormUserInput = SignInUserInput

export type CreatePredictionFormProps = FC<{
  onSubmit: (data: SignInFormUserInput) => void
}>
