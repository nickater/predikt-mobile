import { Database } from './database.types'

export type PredictionType = Database['public']['Tables']['predictions']['Row']

export type CreatePredictionType =
  Database['public']['Tables']['predictions']['Insert']

export type UpdatePredictionType =
  Database['public']['Tables']['predictions']['Update']

export type PredictionRelationshipsType =
  Database['public']['Tables']['predictions']['Relationships']
