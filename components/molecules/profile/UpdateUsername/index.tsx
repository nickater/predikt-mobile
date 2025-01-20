import {
  UpdateUsernameFormInput,
  useAuth,
  useUpdateUsernameForm,
} from '@/hooks'
import { SubmitHandler } from 'react-hook-form'
import { Alert, StyleSheet } from 'react-native'
import { UpdateUsernameForm } from '../../forms/UpdateUsernameForm'
import { UpdateUsernameProps } from './types'

export const UpdateUsername: UpdateUsernameProps = ({ onSubmit }) => {
  const { updateUsername } = useAuth()
  const { control, handleSubmit, reset, formState } = useUpdateUsernameForm()

  const handleUpdateUsername: SubmitHandler<UpdateUsernameFormInput> = async ({
    username,
  }) => {
    await updateUsername(username)
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
    <UpdateUsernameForm
      control={control}
      formState={formState}
      onSubmit={handleSubmit(handleUpdateUsername, handleInvalidUsername)}
    />
  )
}

const styles = StyleSheet.create({
  container: {},
})
