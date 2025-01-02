import {
  getUserQuestionsQueryFn,
  getUserQuestionsQueryKey,
} from '@/queries/question/getQuestionsByUser'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../auth'
import { useSupabase } from '../useSupabase'
import { checkIfPredictionExists } from '@/queries/prediction/checkIfPredictionExists'

const ONE_HOUR = 1000 * 60 * 60

export function useFetchOwnQuestions() {
  const supabase = useSupabase()
  const { session } = useAuth()
  const userId = session?.user?.id

  const queryKey = [getUserQuestionsQueryKey()]
  const queryFn = async () => {
    if (!userId) return null
    const getQuestionsByUser = getUserQuestionsQueryFn(userId)

    const questions = await getQuestionsByUser(supabase)()

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
