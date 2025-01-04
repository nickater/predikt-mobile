import { SupabaseClient } from '@/libs/supabase/types'
import { QuestionType } from '@/types/question'
import { QueryClient } from '@tanstack/react-query'

const getQuestionsByUser = (client: SupabaseClient, userId: string) => {
  return client
    .from('questions')
    .select('*')
    .eq('author_id', userId)
    .throwOnError()
    .order('created_at', { ascending: false })
}

export const getUserQuestionsQueryFn =
  (userId: string) => (client: SupabaseClient) => {
    return async (): Promise<QuestionType[]> => {
      const userQuestionsResult = await getQuestionsByUser(client, userId)
      return userQuestionsResult.data
    }
  }

export const getUserQuestionsQueryKey = (userId: string) =>
  `userQuestions-${userId}`

// Only used in prefetching in the initial load of the app
export const prefetchQuestionsByUser = async (
  client: QueryClient,
  dbClient: SupabaseClient,
  userId: string,
) => {
  const questionsQuery = getUserQuestionsQueryFn(userId)
  const questionsQueryKey = getUserQuestionsQueryKey(userId)

  client.prefetchQuery({
    queryKey: [questionsQueryKey],
    queryFn: questionsQuery(dbClient),
  })
}
