import { SupabaseClient } from '@/supabase'

export function getQuestionById(client: SupabaseClient, questionId: string) {
  return client
    .from('questions')
    .select('*')
    .eq('id', questionId)
    .throwOnError()
    .single()
}
