import { Button, TextInput } from '@/components/atoms'
import { Controller } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { UpdatePasswordFormProps } from './types'

export const UpdatePasswordForm: UpdatePasswordFormProps = ({
  control,
  formState,
  onSubmit,
}) => {
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

      <Button.Primary label="Update Password" onPress={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
