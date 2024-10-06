import z from 'zod'
import { Prediction } from './entities'

export const PredictionSchema: z.ZodType<Prediction> = z.object({
  created_at: z.string(),
  id: z.string(),
  is_revealed: z.boolean().nullable(),
  question_id: z.string(),
  text: z.string(),
  user_id: z.string(),
})

export type PredictionType = z.infer<typeof PredictionSchema>

export type CreatePredictionType = Omit<
  PredictionType,
  'id' | 'created_at' | 'is_revealed'
>
export type UpdatePredictionType = Omit<PredictionType, 'id' | 'created_at'>
