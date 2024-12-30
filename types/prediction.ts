import { Database } from './database.types'
import { ProfileType } from './profile'
import { QuestionType } from './question'

export type PredictionType = Database['public']['Tables']['predictions']['Row']

export type CreatePredictionType =
  Database['public']['Tables']['predictions']['Insert']

export type UpdatePredictionType =
  Database['public']['Tables']['predictions']['Update']

export type PredictionRelationshipsType =
  Database['public']['Tables']['predictions']['Relationships']

export type PredictionWithRelations =
  Database['public']['Tables']['predictions']['Row'] & {
    question: QuestionType & {
      author: ProfileType
    }
  }
