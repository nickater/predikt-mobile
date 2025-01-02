import { SupabaseClient } from '@/supabase'
import { QuestionType } from '@/types/question'
import { QueryClient } from '@tanstack/react-query'

const getPublicQuestions = (client: SupabaseClient) => {
  return client
    .from('questions')
    .select('*')
    .eq('visibility', 'public')
    .throwOnError()
    .order('created_at', { ascending: false })
}

export const getPublicQuestionsQueryFn = () => (client: SupabaseClient) => {
  return async (): Promise<QuestionType[]> => {
    const publicQuestionsResult = await getPublicQuestions(client)
    return publicQuestionsResult.data
  }
}

export const getPublicQuestionsQueryKey = () => 'publicQuestions'

// Only used in prefetching in the initial load of the app
export const prefetchPublicQuestions = async (
  client: QueryClient,
  dbClient: SupabaseClient,
) => {
  const questionsQuery = getPublicQuestionsQueryFn()
  const questionsQueryKey = getPublicQuestionsQueryKey()

  client.prefetchQuery({
    queryKey: [questionsQueryKey],
    queryFn: questionsQuery(dbClient),
  })
}
