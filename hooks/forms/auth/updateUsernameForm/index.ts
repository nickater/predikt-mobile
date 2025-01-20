import { useForm } from 'react-hook-form'
import { UpdateUsernameFormInput } from './types'

export const useUpdateUsernameForm = () => {
  return useForm<UpdateUsernameFormInput>({
    defaultValues: {
      username: '',
    },
  })
}

export type UseUpdateUsernameFormReturn = ReturnType<
  typeof useUpdateUsernameForm
>
export type { UpdateUsernameFormInput }
