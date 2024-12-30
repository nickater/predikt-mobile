import { CreatePredictionType } from '@/types/prediction'
import { useForm } from 'react-hook-form'

export type CreatePredictionFormInputs = Pick<
  CreatePredictionType,
  'prediction'
>

export const useCreatePredictionForm = () => {
  const form = useForm<CreatePredictionFormInputs>({
    defaultValues: {
      prediction: '',
    },
  })

  return form
}
