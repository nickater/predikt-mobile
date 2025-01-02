import {
  getUserQuestionsQueryFn,
  getUserQuestionsQueryKey,
} from '@/queries/question/getQuestionsByUser'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../auth'
import { useSupabase } from '../useSupabase'

const ONE_HOUR = 1000 * 60 * 60

export function useFetchQuestionsByUser() {
  const { session } = useAuth()
  const supabase = useSupabase()
  const userId = session?.user?.id

  const queryKey = [getUserQuestionsQueryKey()]

  const queryFn = getUserQuestionsQueryFn(userId)(supabase)

  return useQuery({ queryKey, queryFn, enabled: !!userId, staleTime: ONE_HOUR })
}
