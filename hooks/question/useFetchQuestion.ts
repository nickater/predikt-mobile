import { getQuestionById } from '@/queries/question/getQuestionById'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'

export function useFetchQuestion(questionId: number) {
  const client = useSupabase()
  const queryKey = ['profile', questionId]

  const queryFn = async () => {
    const questionResult = await getQuestionById(client, questionId)
    return questionResult.data
  }

  return useQuery({ queryKey, queryFn })
}
