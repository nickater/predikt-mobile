import { useQuery } from '@tanstack/react-query'
import { getQuestionById } from '@/queries/question/getQuestionById'
import { useSupabase } from '../useSupabase'
import { questionQueryKeys } from './queryKeys'
import { checkIfPredictionExists } from '@/queries/prediction/checkIfPredictionExists'
import { useAuth } from '../auth'

export const useFetchQuestionDetail = (questionId?: string) => {
  const supabase = useSupabase()
  const { session } = useAuth()

  const queryKey = [questionQueryKeys.question, questionId]

  const queryFn = async () => {
    const { data } = await getQuestionById(supabase, questionId!)

    const predictionExists = await checkIfPredictionExists(
      supabase,
      data.id,
      session?.user?.id,
    )

    return {
      ...data,
      predictionExists,
    }
  }

  return useQuery({
    queryKey,
    queryFn,
    enabled: !!questionId,
  })
}
