import { UpdatePasswordForm } from '@/components/molecules/forms/UpdatePasswordForm'
import { useUpdatePasswordForm } from '@/hooks/forms'
import { useUpdatePassword } from '@/hooks/profile/useUpdatePassword'
import { FC } from 'react'
import { UpdatePasswordProps } from './types'

export const UpdatePassword: FC<UpdatePasswordProps> = ({
  userId,
  onPasswordUpdate,
}) => {
  const { ...rest } = useUpdatePasswordForm()
  const { mutateAsync } = useUpdatePassword()

  const onSubmit = async () => {
    const { oldPassword, newPassword } = rest.getValues()

    await mutateAsync({
      id: userId,
      oldPassword,
      newPassword,
    })

    onPasswordUpdate?.()
  }

  return <UpdatePasswordForm {...rest} onSubmit={onSubmit} />
}
