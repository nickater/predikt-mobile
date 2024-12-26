import { getQuestionByUser } from '@/queries/question/getQuestionsByUser'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../auth'
import { useSupabase } from '../useSupabase'
import { questionQueryKeys } from './queryKeys'

export function useFetchOwnQuestions() {
  const client = useSupabase()
  const { session } = useAuth()
  const userId = session?.user.id

  const queryKey = [questionQueryKeys.userQuestions]

  const queryFn = async () => {
    if (!userId) return null
    const questionResult = await getQuestionByUser(client, userId)
    return questionResult
  }

  return useQuery({
    queryKey,
    queryFn,
    enabled: !!userId,
  })
}
