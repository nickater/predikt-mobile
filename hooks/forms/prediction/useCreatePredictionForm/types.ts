import { UseFormReturn } from 'react-hook-form'
import { CreatePredictionType } from '@/types/prediction'

export type CreatePredictionFormInputs = Pick<
  CreatePredictionType,
  'is_anonymous' | 'prediction'
>

export type CreatePredictionFormProps =
  UseFormReturn<CreatePredictionFormInputs>
