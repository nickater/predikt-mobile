import {
  getPublicQuestionsQueryFn,
  getPublicQuestionsQueryKey,
} from '@/queries/question/getPublicQuestions'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { checkIfPredictionExists } from '@/queries/prediction/checkIfPredictionExists'
import { useAuth } from '../auth'

const ONE_HOUR = 1000 * 60 * 60

export function useFetchPublicQuestions() {
  const supabase = useSupabase()
  const auth = useAuth()
  const queryKey = [getPublicQuestionsQueryKey()]

  const queryFn = async () => {
    const getPublicQuestions = getPublicQuestionsQueryFn()
    const questions = await getPublicQuestions(supabase)()

    const mappedQuestions = []

    for (const question of questions) {
      const predictionExists = await checkIfPredictionExists(
        supabase,
        question.id,
        auth.session?.user?.id,
      )

      mappedQuestions.push({
        ...question,
        predictionExists,
      })
    }

    return mappedQuestions
  }

  return useQuery({
    queryKey,
    queryFn,
    staleTime: ONE_HOUR,
    enabled: !!auth.session?.user,
  })
}
