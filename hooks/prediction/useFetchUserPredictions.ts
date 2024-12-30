import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import {
  getUserPredictionsQueryFn,
  getUserPredictionsQueryKey,
} from '@/queries/prediction/getPredictionsByUser'

export type UseFetchUserPredictionsReturnType = ReturnType<
  typeof useFetchUserPredictions
>

const ONE_HOUR = 1000 * 60 * 60

export function useFetchUserPredictions(userId?: string) {
  const client = useSupabase()

  const queryKey = getUserPredictionsQueryKey(userId!)

  const queryFnWithoutClient = getUserPredictionsQueryFn(userId!)

  const queryFn = queryFnWithoutClient(client)

  return useQuery({ queryKey, queryFn, enabled: !!userId, staleTime: ONE_HOUR })
}
