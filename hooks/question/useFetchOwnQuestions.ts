import {
  getUserQuestionsQueryFn,
  getUserQuestionsQueryKey,
} from '@/queries/question/getQuestionsByUser'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../auth'
import { useSupabase } from '../useSupabase'

const ONE_HOUR = 1000 * 60 * 60

export function useFetchOwnQuestions() {
  const supabase = useSupabase()
  const { session } = useAuth()
  const userId = session?.user?.id

  const queryFn = getUserQuestionsQueryFn(userId)(supabase)
  const queryKey = getUserQuestionsQueryKey(userId)

  return useQuery({ queryKey, queryFn, enabled: !!userId, staleTime: ONE_HOUR })
}
