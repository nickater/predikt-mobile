import { SupabaseClient } from '@/libs/supabase/types'

export function getUsernameById(client: SupabaseClient, profileId: string) {
  return client
    .from('profiles')
    .select('username')
    .eq('id', profileId)
    .throwOnError()
    .single()
}
