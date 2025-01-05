import { getPredictionsByQuestionId } from '@/queries/prediction/getPredictionsByQuestionId'
import { QuestionType } from '@/types/question'
import { useQuery } from '@tanstack/react-query'

const ONE_HOUR = 1000 * 60 * 60

export const getPredictionsByQuestionIdQueryFn = async (
  questionId: QuestionType['id'],
) => {
  const { data, error } = await getPredictionsByQuestionId(questionId)

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const getPredictionsByQuestionIdQueryKey = (
  questionId: QuestionType['id'],
) => ['predictionsByQuestionId', questionId]

export function useFetchPredictions(questionId: QuestionType['id']) {
  const queryKey = getPredictionsByQuestionIdQueryKey(questionId)

  const queryFn = () => getPredictionsByQuestionIdQueryFn(questionId)

  return useQuery({ queryKey, queryFn, staleTime: ONE_HOUR })
}
