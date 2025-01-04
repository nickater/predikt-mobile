import { Button, TextInput } from '@/components/atoms'
import { useProfile } from '@/hooks'
import { FC, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useUpdatePassword } from '@/hooks/profile/useUpdatePassword'

type UpdatePasswordProps = {}

type FormData = {
  oldPassword: string
  newPassword: string
}

export const UpdatePassword: FC<UpdatePasswordProps> = () => {
  const { data } = useProfile()
  const { mutateAsync, error, isSuccess } = useUpdatePassword()
  const { control, handleSubmit, reset, setFocus, resetField, register } =
    useForm<FormData>({
      defaultValues: {
        oldPassword: '',
        newPassword: '',
      },
    })

  const handleUpdatePassword = async (formData: FormData) => {
    await mutateAsync({
      id: data?.id,
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
    })
  }

  useEffect(() => {
    if (error) {
      resetField('oldPassword')
      setFocus('oldPassword')
    }
  }, [error, resetField, setFocus])

  useEffect(() => {
    if (isSuccess) {
      reset({ oldPassword: '', newPassword: '' })
    }
  }, [isSuccess, reset])

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="oldPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput
            focusable
            secureTextEntry
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            placeholder="Enter old password"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="newPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            placeholder="Enter new password"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Button
        title="Update Password"
        onPress={handleSubmit(handleUpdatePassword)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
