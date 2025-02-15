import { getQuestionById } from '@/queries/question/getQuestionById'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '@uidotdev/usehooks'
import { useState } from 'react'
import { useSupabase } from '../useSupabase'
import { QuestionType } from '@/types/question'
import { questionQueryKeys } from './queryKeys'

export function useFetchQuestion() {
  const client = useSupabase()
  const [questionId, setQuestionId] = useState<QuestionType['id'] | null>(null)
  const debouncedQuestionId = useDebounce(questionId, 1000)
  const queryKey = [questionQueryKeys.question, questionId]

  const queryFn = async () => {
    if (!debouncedQuestionId) return null
    const questionResult = await getQuestionById(client, debouncedQuestionId)
    return questionResult.data
  }

  return {
    ...useQuery({
      queryKey,
      queryFn,
      enabled: !!questionId,
    }),
    setQuestionId,
  }
}
