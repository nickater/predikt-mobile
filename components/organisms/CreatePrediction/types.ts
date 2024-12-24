import { CreatePredictionType } from '@/types/prediction'

export type CreatePredictionUserInput = Pick<
  CreatePredictionType,
  'user_id' | 'question_id' | 'prediction'
>
