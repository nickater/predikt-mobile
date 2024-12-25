import {
  questionsRowSchema,
  questionsInsertSchema,
  questionsRelationshipsSchema,
  questionsUpdateSchema,
} from './schemas'

export const questionSchema = questionsRowSchema

export type QuestionType = (typeof questionSchema)['_output']

export const createQuestionSchema = questionsInsertSchema

export type CreateQuestionType = (typeof createQuestionSchema)['_output']

export const updateQuestionSchema = questionsUpdateSchema

export type UpdateQuestionType = (typeof updateQuestionSchema)['_output']

export const questionRelationshipsSchema = questionsRelationshipsSchema

export type QuestionRelationshipsType =
  (typeof questionRelationshipsSchema)['_output']
