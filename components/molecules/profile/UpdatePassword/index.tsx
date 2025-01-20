import {
  UpdatePasswordFormInput,
  useAuth,
  useUpdatePasswordForm,
} from '@/hooks'
import { SubmitHandler } from 'react-hook-form'
import { Alert, StyleSheet } from 'react-native'
import { UpdatePasswordForm } from '../../forms'
import { UpdatePasswordProps } from './types'

export const UpdatePassword: UpdatePasswordProps = ({ onSubmit }) => {
  const { updatePassword } = useAuth()
  const { control, handleSubmit, reset, formState } = useUpdatePasswordForm()

  const handleUpdateUsername: SubmitHandler<UpdatePasswordFormInput> = async ({
    oldPassword,
    newPassword,
  }) => {
    const password = newPassword
    await updatePassword(password)

    reset()
    onSubmit()
  }

  const handleInvalidUsername = () => {
    // TODO
    Alert.alert(
      'Invalid username',
      'Username must be at least 3 characters long.',
    )
  }

  return (
    <UpdatePasswordForm
      control={control}
      formState={formState}
      onSubmit={handleSubmit(handleUpdateUsername, handleInvalidUsername)}
    />
  )
}

const styles = StyleSheet.create({
  container: {},
})
