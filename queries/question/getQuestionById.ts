import { SupabaseClient } from '@/libs/supabase/types'

export function getQuestionById(client: SupabaseClient, questionId: string) {
  return client
    .from('questions')
    .select('*')
    .eq('id', questionId)
    .throwOnError()
    .single()
}
