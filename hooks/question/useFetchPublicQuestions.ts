import {
  getPublicQuestionsQueryFn,
  getPublicQuestionsQueryKey,
} from '@/queries/question/getPublicQuestions'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'

const ONE_HOUR = 1000 * 60 * 60

export function useFetchPublicQuestions() {
  const supabase = useSupabase()
  const queryKey = getPublicQuestionsQueryKey()

  const queryFn = getPublicQuestionsQueryFn()(supabase)

  return useQuery({ queryKey, queryFn, staleTime: ONE_HOUR })
}
