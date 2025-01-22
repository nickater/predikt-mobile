import { useSupabase } from '@/hooks/useSupabase'
import {
  getPredictionsByQuestionQueryFn,
  getPredictionsByQuestionQueryKey,
} from '@/queries/prediction/getPredictionsByQuestionId'
import {
  getUserPredictionsQueryFn,
  getUserPredictionsQueryKey,
} from '@/queries/prediction/getPredictionsByUser'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'

export const getPredictionsByIdQueryKey = (
  id: string,
  type: 'user' | 'question' = 'question',
) => ['predictionsByQuestionId', id, type]

export function useFetchPredictions(
  id: string,
  type: 'user' | 'question' = 'question',
) {
  const client = useSupabase()
  const queryKey = useMemo(() => {
    switch (type) {
      case 'user':
        return getUserPredictionsQueryKey(id)
      case 'question':
        return getPredictionsByQuestionQueryKey(id)
    }
  }, [id, type])

  const queryFn = useCallback(async () => {
    switch (type) {
      case 'user':
        return getUserPredictionsQueryFn(id)(client)()
      case 'question':
        return getPredictionsByQuestionQueryFn(id)(client)()
    }
  }, [client, id, type])

  return useQuery({ queryKey, queryFn, enabled: !!id })
}
