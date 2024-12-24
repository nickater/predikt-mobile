import { z } from 'zod'
import type { Prediction, CreatePrediction, UpdatePrediction } from './entities'

export const predictionSchema: z.ZodType<Prediction> = z.object({
  id: z.string(),
  user_id: z.string(),
  question_id: z.string(),
  prediction: z.string(),
  created_at: z.string().nullable(),
  updated_at: z.string().nullable(),
  is_anonymous: z.boolean().nullable(),
})

export type PredictionType = z.infer<typeof predictionSchema>

export const createPredictionSchema: z.ZodType<CreatePrediction> = z.object({
  user_id: z.string(),
  question_id: z.string(),
  prediction: z.string(),
  is_anonymous: z.boolean().nullable(),
})

export type CreatePredictionType = z.infer<typeof createPredictionSchema>

export const updatePredictionSchema: z.ZodType<UpdatePrediction> = z.object({
  prediction: z.string().optional(),
  is_anonymous: z.boolean().nullable().optional(),
})

export type UpdatePredictionType = z.infer<typeof updatePredictionSchema>
