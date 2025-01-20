import { PredictionWithRelations } from '@/types/prediction'
import { FC } from 'react'

export type ViewPredictionsProps = FC<{
  data: PredictionWithRelations[]
  isLoading: boolean
}>
