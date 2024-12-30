import { getPredictionById } from '@/queries/prediction/getPrediction'
import { PredictionType } from '@/types/prediction'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { SupabaseClient } from '@/supabase'

const ONE_HOUR = 1000 * 60 * 60

export const getPredictionQueryFn =
  (predictionId: PredictionType['id']) => (client: SupabaseClient) => {
    return async () => {
      const predictionResult = await getPredictionById(client, predictionId)
      return predictionResult.data
    }
  }

export const getPredictionQueryKey = (predictionId: PredictionType['id']) => [
  'prediction',
  predictionId,
]

export function useFetchPredictions(predictionId: PredictionType['id']) {
  const client = useSupabase()

  const queryKey = getPredictionQueryKey(predictionId)

  const queryFnWithoutClient = getPredictionQueryFn(predictionId)

  const queryFn = queryFnWithoutClient(client)

  return useQuery({ queryKey, queryFn, staleTime: ONE_HOUR })
}
