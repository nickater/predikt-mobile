import { SupabaseClient } from '@/supabase'
import { QuestionType } from '@/types/question'

export async function getQuestionByUser(
  client: SupabaseClient,
  userId: string,
): Promise<QuestionType[]> {
  return client
    .from('questions')
    .select('*')
    .eq('user_id', userId)
    .throwOnError()
    .then((response) => response.data || [])
}
