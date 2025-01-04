import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { updateUsername } from '@/queries/profile/udpateUsername'
import { getUsernameByIdQueryKey } from './useGetUsernameById'

type UpdateUsernameProps = {
  id: string
  newUsername: string
}
export const useUpdateUsername = () => {
  const supabase = useSupabase()
  const queryClient = useQueryClient()

  let queryKey: string[] = []

  const mutationFn = async ({ id, newUsername }: UpdateUsernameProps) => {
    await updateUsername(supabase, id, newUsername)

    queryKey = getUsernameByIdQueryKey(id)
  }

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey,
    })
  }

  return useMutation({
    mutationFn,
    onSuccess,
  })
}
