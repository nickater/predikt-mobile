import { SupabaseClient } from '@/supabase'

export const getPredictionsByUser = (
  client: SupabaseClient,
  userId: string,
) => {
  return client
    .from('predictions')
    .select('*')
    .eq('user_id', userId)
    .throwOnError()
    .order('created_at', { ascending: false })
    .then((res) => res.data)
}
