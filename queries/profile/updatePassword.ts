import { SupabaseClient } from '@/libs/supabase/types'

export async function updatePassword(
  client: SupabaseClient,
  oldPassword: string,
  newPassword: string,
) {
  const user = await client.auth.getUser()
  const email = user?.data.user.email

  const { error } = await client.auth.signInWithPassword({
    email,
    password: oldPassword,
  })

  if (error) {
    throw error
  }

  const { data } = await client.auth.updateUser({
    password: newPassword,
  })

  return { updatePassword: data }
}
