import { SupabaseClient } from '@/supabase'
import { QuestionType } from '@/types/question'

export async function getPublicQuestions(
  client: SupabaseClient,
): Promise<QuestionType[]> {
  return client
    .from('questions')
    .select('*')
    .eq('visibility', 'public')
    .throwOnError()
    .then((response) => response.data || [])
}
