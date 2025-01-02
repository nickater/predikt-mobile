import {
  getUserQuestionsQueryFn,
  getUserQuestionsQueryKey,
} from '@/queries/question/getQuestionsByUser'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../auth'
import { useSupabase } from '../useSupabase'
import { checkIfPredictionExists } from '@/queries/prediction/checkIfPredictionExists'

const ONE_HOUR = 1000 * 60 * 60

export function useFetchQuestionsByUser(userId: string) {
  const { session } = useAuth()
  const supabase = useSupabase()

  const queryKey = [getUserQuestionsQueryKey(userId)]

  const queryFn = async () => {
    const questions = await getUserQuestionsQueryFn(userId)(supabase)()

    const mappedQuestions = []

    for (const question of questions) {
      const predictionExists = await checkIfPredictionExists(
        supabase,
        question.id,
        session?.user?.id,
      )

      mappedQuestions.push({
        ...question,
        predictionExists,
      })
    }

    return mappedQuestions
  }

  return useQuery({ queryKey, queryFn, enabled: !!userId, staleTime: ONE_HOUR })
}
