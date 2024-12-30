import { SupabaseClient } from '@/supabase'
import { PredictionWithRelations } from '@/types/prediction'
import { QueryClient } from '@tanstack/react-query'

const getPredictionsByUser = (client: SupabaseClient, userId: string) => {
  return client
    .from('predictions')
    .select(
      `
      *,
      question:question_id(
        *,
        author:author_id(*)
      )
      `,
    )
    .eq('user_id', userId)
    .throwOnError()
    .order('created_at', { ascending: false })
}

export const getUserPredictionsQueryFn =
  (userId: string) => (client: SupabaseClient) => {
    return async (): Promise<PredictionWithRelations[]> => {
      const userPredictionsResult = await getPredictionsByUser(client, userId)
      return userPredictionsResult.data
    }
  }

export const getUserPredictionsQueryKey = (userId: string) => [
  'userPredictions',
  userId,
]

// Only used in prefetching in the initial load of the app
export const prefetchPredictionsByUser = async (
  client: QueryClient,
  dbClient: SupabaseClient,
  userId: string,
) => {
  const predictionQuery = getUserPredictionsQueryFn(userId)
  const predictionQueryKey = getUserPredictionsQueryKey(userId)

  client.prefetchQuery({
    queryKey: predictionQueryKey,
    queryFn: predictionQuery(dbClient),
  })
}
