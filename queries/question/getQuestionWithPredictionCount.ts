import { SupabaseClient } from '@/supabase'
import { QuestionType } from '@/types/question'

export type QuestionWithPredictionCount = QuestionType & {
  predictionCount: number
}

export async function getQuestionWithPredictionCount(
  client: SupabaseClient,
): Promise<QuestionWithPredictionCount | null> {
  const question = await client
    .from('questions')
    .select('*')
    .eq('visibility', 'public')
    .eq('id', 'question_id')
    .single()

  if (!question || question.error) {
    return null
  }

  const predictionCountResult = await client.rpc('get_predictions_count', {
    question_id: question.data.id,
  })

  if (!predictionCountResult || predictionCountResult.error) {
    return null
  }

  const predictionCount = predictionCountResult.data ?? 0

  return {
    ...question.data,
    predictionCount,
  }
}
