import { FC } from 'react'
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text, TextInput } from '@/components/atoms'
import { SignUpFormProps, SignUpFormUserInput } from './types'

export const SignUpForm: SignUpFormProps = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SignUpFormUserInput>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const onValidSubmission = (data: SignUpFormUserInput) => {
    onSubmit(data)
  }

  const onInvalidSubmission: SubmitErrorHandler<SignUpFormUserInput> = (
    errors,
  ) => {
    console.error(errors)
  }

  const isButtonDisabled =
    Object.keys(errors).length > 0 || Object.keys(dirtyFields).length === 0

  return (
    <Card>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && <Text>Username is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}
      <Button.Primary
        label="Submit"
        onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
        disabled={isButtonDisabled}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
})
