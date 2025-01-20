import { PredictionWithRelations } from '@/types/prediction'
import { SupabaseClient } from '@supabase/supabase-js'
import { getPredictionsAndQuestionByQuestionId } from './shared'

export const getPredictionsByQuestionQueryFn =
  (questionId: string) => (client: SupabaseClient) => {
    return async (): Promise<PredictionWithRelations[]> => {
      const questionPredictionsResult =
        await getPredictionsAndQuestionByQuestionId(questionId)
      return questionPredictionsResult.data
    }
  }

export const getPredictionsByQuestionQueryKey = (questionId: string) => [
  'questionPredictions',
  questionId,
]
