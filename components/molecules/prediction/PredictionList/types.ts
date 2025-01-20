import { PredictionWithRelations } from '@/types/prediction'
import { FC } from 'react'

export type PredictionListProps = FC<{
  predictions: PredictionWithRelations[]
}>
