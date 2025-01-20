import { Button, TextInput } from '@/components/atoms'
import { Controller } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { UpdateUsernameFormProps } from './types'

export const UpdateUsernameForm: UpdateUsernameFormProps = ({
  control,
  formState,
  onSubmit,
}) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            bottomSheet
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            placeholder={'Enter new username'}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Button.Primary label="Update Username" onPress={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
