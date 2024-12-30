import { Database } from './database.types'

export type QuestionType = Database['public']['Tables']['questions']['Row']

export type CreateQuestionType =
  Database['public']['Tables']['questions']['Insert']

export type UpdateQuestionType =
  Database['public']['Tables']['questions']['Update']

export type QuestionRelationshipsType =
  Database['public']['Tables']['questions']['Relationships']
