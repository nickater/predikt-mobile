import { SupabaseClient } from '@/supabase'

export function getUsernameById(client: SupabaseClient, profileId: string) {
  return client
    .from('profiles')
    .select('username')
    .eq('id', profileId)
    .throwOnError()
    .single()
}
