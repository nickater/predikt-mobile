import {
  predictionsRowSchema,
  predictionsInsertSchema,
  predictionsRelationshipsSchema,
  predictionsUpdateSchema,
} from './schemas'

export const predictionSchema = predictionsRowSchema

export type PredictionType = (typeof predictionSchema)['_output']

export const createPredictionSchema = predictionsInsertSchema

export type CreatePredictionType = (typeof createPredictionSchema)['_output']

export const updatePredictionSchema = predictionsUpdateSchema

export type UpdatePredictionType = (typeof updatePredictionSchema)['_output']

export const predictionRelationshipsSchema = predictionsRelationshipsSchema

export type PredictionRelationshipsType =
  (typeof predictionRelationshipsSchema)['_output']
