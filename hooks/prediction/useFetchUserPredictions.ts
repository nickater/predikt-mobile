import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import {
  getUserPredictionsQueryFn,
  getUserPredictionsQueryKey,
} from '@/queries/prediction/getPredictionsByUser'
import { useAuth } from '../auth'

export type UseFetchUserPredictionsReturnType = ReturnType<
  typeof useFetchUserPredictions
>

const ONE_HOUR = 1000 * 60 * 60

export function useFetchUserPredictions(_userId?: string) {
  const client = useSupabase()
  const { session } = useAuth()

  const userId = _userId || session?.user?.id

  const queryKey = getUserPredictionsQueryKey(userId!)

  const queryFnWithoutClient = getUserPredictionsQueryFn(userId!)

  const queryFn = queryFnWithoutClient(client)

  return useQuery({ queryKey, queryFn, enabled: !!userId, staleTime: ONE_HOUR })
}
