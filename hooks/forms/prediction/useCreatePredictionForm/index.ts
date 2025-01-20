import { useForm } from 'react-hook-form'
import { CreatePredictionFormInputs } from './types'

export const useCreatePredictionForm = () => {
  return useForm<CreatePredictionFormInputs>({
    defaultValues: {
      prediction: '',
      is_anonymous: false,
    },
  })
}

export type UseCreatePredictionFormReturn = ReturnType<
  typeof useCreatePredictionForm
>

export type { CreatePredictionFormInputs }
