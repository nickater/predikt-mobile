import { SupabaseClient } from '@/supabase'

export function getProfileById(client: SupabaseClient, profileId: number) {
  return client
    .from('profiles')
    .select('*')
    .eq('id', profileId)
    .throwOnError()
    .single()
}