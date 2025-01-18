import { getPredictionsByQuestionId } from '@/queries/prediction/getPredictionsByQuestionId'
import { useQuery } from '@tanstack/react-query'

const ONE_HOUR = 1000 * 60 * 60

export const getPredictionsByIdQueryFn = async (id: string) => {
  const { data, error } = await getPredictionsByQuestionId(id)

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const getPredictionsByIdQueryKey = (
  id: string,
  type: 'user' | 'question' = 'question',
) => ['predictionsByQuestionId', id, type]

export function useFetchPredictions(
  id: string,
  type: 'user' | 'question' = 'question',
) {
  const queryKey = getPredictionsByIdQueryKey(id)

  const queryFn = () => getPredictionsByIdQueryFn(id)

  return useQuery({ queryKey, queryFn, staleTime: ONE_HOUR, enabled: !!id })
}
