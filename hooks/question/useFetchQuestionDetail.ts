import { useQuery } from '@tanstack/react-query'
import { getQuestionById } from '@/queries/question/getQuestionById'
import { useSupabase } from '../useSupabase'
import { questionQueryKeys } from './queryKeys'

export const useFetchQuestionDetail = (questionId: string) => {
  const client = useSupabase()

  const queryKey = [questionQueryKeys.question, questionId]

  const queryFn = async () => {
    const { data } = await getQuestionById(client, questionId)
    return data
  }

  return useQuery({
    queryKey,
    queryFn,
  })
}
