import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { updatePassword } from '@/queries/profile/updatePassword'
import { getUsernameByIdQueryKey } from './useGetUsernameById'

type UpdatePasswordProps = {
  id: string
  oldPassword: string
  newPassword: string
}

export const useUpdatePassword = () => {
  const supabase = useSupabase()
  const queryClient = useQueryClient()

  let queryKey: string[] = []

  const mutationFn = async ({
    id,
    oldPassword,
    newPassword,
  }: UpdatePasswordProps) => {
    await updatePassword(supabase, oldPassword, newPassword)

    queryKey = getUsernameByIdQueryKey(id)
  }

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey,
    })
  }

  const onError = (error) => {
    console.error(error)
  }

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  })
}
