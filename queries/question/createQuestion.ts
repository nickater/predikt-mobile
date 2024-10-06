import { SupabaseClient } from '@/supabase'
import { CreateQuestionType } from '@/types/question'

export function createQuestion(
  client: SupabaseClient,
  question: CreateQuestionType,
) {
  return client.from('questions').insert([question]).throwOnError().single()
}
