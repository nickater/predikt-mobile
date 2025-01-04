import { SupabaseClient } from '@/libs/supabase/types'

export async function updateUsername(
  client: SupabaseClient,
  id: string,
  newUsername: string,
) {
  const { data, error } = await client
    .from('profiles')
    .update({ username: newUsername })
    .eq('id', id)
    .select('username')
    .single()

  if (error) {
    throw error
  }

  return { updateUsername: data }
}
