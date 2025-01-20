import { useForm } from 'react-hook-form'
import { UpdatePasswordFormInput } from './types'

export const useUpdatePasswordForm = () => {
  return useForm<UpdatePasswordFormInput>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
  })
}

export type UseUpdatePasswordFormReturn = ReturnType<
  typeof useUpdatePasswordForm
>
export type { UpdatePasswordFormInput }
