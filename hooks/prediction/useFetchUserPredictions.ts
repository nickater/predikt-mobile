import { getPredictionsByUser } from '@/queries/prediction/getPredictionsByUser'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { PredictionWithRelations } from '@/types/prediction'

export type UseFetchUserPredictionsReturnType = ReturnType<
  typeof useFetchUserPredictions
>

export function useFetchUserPredictions(userId?: string) {
  const client = useSupabase()
  const queryKey = ['userPredictions', userId]

  const queryFn = async (): Promise<PredictionWithRelations[]> => {
    const userPredictionsResult = await getPredictionsByUser(client, userId!)
    return userPredictionsResult.data
  }

  return useQuery({ queryKey, queryFn, enabled: !!userId })
}
