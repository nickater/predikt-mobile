import { updateUsername } from '@/queries/profile/udpateUsername'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UpdateUsernameFormInput } from '../forms'
import { useSupabase } from '../useSupabase'
import { getUsernameByIdQueryKey } from './useGetUsernameById'

type UpdateUsernameProps = {
  id: string
} & UpdateUsernameFormInput
export const useUpdateUsername = () => {
  const supabase = useSupabase()
  const queryClient = useQueryClient()

  let queryKey: string[] = []

  const mutationFn = async ({ id, username }: UpdateUsernameProps) => {
    await updateUsername(supabase, id, username)

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
