import { SupabaseClient } from '@/supabase'
import { QuestionType } from '@/types/question'

export async function checkIfPredictionExists(
  client: SupabaseClient,
  questionId: QuestionType['id'],
  userId: string,
) {
  const result = await client
    .from('predictions')
    .select('*')
    .eq('question_id', questionId)
    .eq('user_id', userId)
    .maybeSingle()

  if (result.data) {
    return true
  }

  return false
}
