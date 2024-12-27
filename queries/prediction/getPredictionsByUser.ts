import { SupabaseClient } from '@/supabase'

export const getPredictionsByUser = (
  client: SupabaseClient,
  userId: string,
) => {
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
