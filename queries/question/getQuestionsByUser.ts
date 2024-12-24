import { SupabaseClient } from '@/supabase'
import { QuestionType } from '@/types/question'

export async function getQuestionByUser(
  client: SupabaseClient,
  userId: string,
): Promise<QuestionType[]> {
  return client
    .from('questions')
    .select('*')
    .eq('author_id', userId)
    .throwOnError()
    .then((response) => {
      console.log('response', response)

      return response.data || []
    })
}
