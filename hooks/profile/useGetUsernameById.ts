import { getUsernameById } from '@/queries/profile/getUsernameById'
import { SupabaseClient } from '@/libs/supabase/types'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'

const ONE_HOUR = 1000 * 60 * 60

export const getUsernameByIdQueryFn =
  (userId: string) => (client: SupabaseClient) => {
    return async () => {
      const { data } = await getUsernameById(client, userId)

      return data.username
    }
  }

export const getUsernameByIdQueryKey = (userId: string) => ['username', userId]

export function useGetUsernameById(userId?: string) {
  const client = useSupabase()

  const queryKey = getUsernameByIdQueryKey(userId)

  const queryFnWithoutClient = getUsernameByIdQueryFn(userId)

  const queryFn = queryFnWithoutClient(client)

  return useQuery({ queryKey, queryFn, staleTime: ONE_HOUR })
}
