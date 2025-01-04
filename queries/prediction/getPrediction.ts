import { SupabaseClient } from '@/libs/supabase/types'
import { PredictionType } from '@/types/prediction'

// get a single prediction with its question title
export function getPredictionById(
  client: SupabaseClient,
  predictionId: PredictionType['id'],
) {
  return client
    .from('predictions')
    .select(
      `
      *,
      question:question_id(*)
    `,
    )
    .eq('id', predictionId)
    .throwOnError()
    .single()
}
