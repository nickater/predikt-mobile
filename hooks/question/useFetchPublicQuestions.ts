import { getPublicQuestions } from '@/queries/question/getPublicQuestions'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { questionQueryKeys } from './queryKeys'

export function useFetchPublicQuestions() {
  const client = useSupabase()
  const queryKey = [questionQueryKeys.question]

  const queryFn = async () => {
    const questions = await getPublicQuestions(client)
    return questions
  }

  return useQuery({
    queryKey,
    queryFn,
  })
}
