import { getProfileById } from '@/queries/profile/getProfileById'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'

export function useProfile(profileId: number) {
  const client = useSupabase()
  const queryKey = ['profile', profileId]

  const queryFn = async () => {
    const profileResult = await getProfileById(client, profileId)
    return profileResult.data
  }

  return useQuery({ queryKey, queryFn })
}
