import { getQuestionByUser } from '@/queries/question/getQuestionsByUser'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../auth'
import { useSupabase } from '../useSupabase'
import { questionQueryKeys } from './queryKeys'

export function useFetchQuestionsByUser() {
  const client = useSupabase()
  const { session } = useAuth()
  const userId = session?.user.id

  const queryKey = [questionQueryKeys.question]

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
