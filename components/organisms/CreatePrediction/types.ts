import { CreatePredictionType } from '@/types/prediction'

export type CreatePredictionUserInput = Omit<
  CreatePredictionType,
  'user_id' | 'question_id'
>
