import { SupabaseClient } from '@/supabase'

export function getProfileById(client: SupabaseClient, profileId: string) {
  return client
    .from('profiles')
    .select('*')
    .eq('id', profileId)
    .throwOnError()
    .single()
}
