import { z } from 'zod'
import { CreateQuestion, Question, UpdateQuestion } from './entities'
import { QuestionVisibilitySchema as questionVisibilitySchema } from './questionVisibility'

export const questionSchema: z.ZodType<Question> = z.object({
  id: z.string(),
  author_id: z.string(),
  created_at: z.string().nullable(),
  title: z.string(),
  description: z.string().nullable(),
  allow_anonymous_predictions: z.boolean().nullable(),
  deadline: z.string(),
  is_active: z.boolean().nullable(),
  last_activity_at: z.string().nullable(),
  last_updated_at: z.string().nullable(),
  show_prediction_count: z.boolean().nullable(),
  visibility: questionVisibilitySchema,
})

export type QuestionType = z.infer<typeof questionSchema>

export const createQuestionSchema: z.ZodType<CreateQuestion> = z.object({
  title: z.string(),
  author_id: z.string(),
  description: z.string().nullable(),
  allow_anonymous_predictions: z.boolean().nullable(),
  deadline: z.string(),
  is_active: z.boolean().nullable(),
  show_prediction_count: z.boolean().nullable(),
  visibility: questionVisibilitySchema,
})

export type CreateQuestionType = z.infer<typeof createQuestionSchema>

const updateQuestionSchema: z.ZodType<UpdateQuestion> = z.object({
  title: z.string().optional(),
  description: z.string().nullable().optional(),
  allow_anonymous_predictions: z.boolean().nullable().optional(),
  deadline: z.string().optional(),
  is_active: z.boolean().nullable().optional(),
  show_prediction_count: z.boolean().nullable().optional(),
  visibility: questionVisibilitySchema.optional(),
})

export type UpdateQuestionType = z.infer<typeof updateQuestionSchema>
