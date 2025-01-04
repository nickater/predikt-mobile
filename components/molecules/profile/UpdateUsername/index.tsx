import { Button, TextInput } from '@/components/atoms'
import { useProfile, useUpdateUsername } from '@/hooks'
import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

type UpdateUsernameProps = {
  onSubmit: ({ username }: { username: string }) => Promise<boolean>
}

type FormData = {
  username: string
}

export const UpdateUsername: FC<UpdateUsernameProps> = ({ onSubmit }) => {
  const { data } = useProfile()
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      username: data?.username || '',
    },
  })

  const handleUpdateUsername = async (formData: FormData) => {
    const result = await onSubmit({ username: formData.username })

    if (result) {
      reset({ username: '' })
    }
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            placeholder={data?.username}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Button
        title="Update Username"
        onPress={handleSubmit(handleUpdateUsername)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
