import { getProfileById } from '@/queries/profile/getProfileById'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { useAuth } from '../auth'
import { SupabaseClient } from '@/supabase'

const ONE_HOUR = 1000 * 60 * 60

export const getProfileQueryFn =
  (profileId: string) => (client: SupabaseClient) => {
    return async () => {
      const profileResult = await getProfileById(client, profileId)
      return profileResult.data
    }
  }

export const getProfileQueryKey = (profileId: string) => ['profile', profileId]

export function useProfile(alternativeProfileId?: string) {
  const { session } = useAuth()
  const client = useSupabase()

  const profileId = alternativeProfileId ?? session?.user?.id

  const queryKey = getProfileQueryKey(profileId)

  const queryFnWithoutClient = getProfileQueryFn(profileId)

  const queryFn = queryFnWithoutClient(client)

  return useQuery({ queryKey, queryFn, staleTime: ONE_HOUR })
}
