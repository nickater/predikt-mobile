import { SupabaseClient } from '@/supabase'
import { CreatePredictionType } from '@/types/prediction'

export function createPrediction(
  client: SupabaseClient,
  prediction: CreatePredictionType,
) {
  return client.from('predictions').insert(prediction)
}
