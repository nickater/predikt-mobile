import { Button, Text, TextInput } from '@/components/atoms'
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { CreatePredictionFormProps, SignInFormUserInput } from './types'

const TEST_EMAIL = process.env.EXPO_PUBLIC_TEST_EMAIL
const TEST_PASSWORD = process.env.EXPO_PUBLIC_TEST_PASSWORD

export const SignInForm: CreatePredictionFormProps = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SignInFormUserInput>({
    defaultValues: {
      email: TEST_EMAIL ?? '',
      password: TEST_PASSWORD ?? '',
    },
  })

  const onValidSubmission = (data: SignInFormUserInput) => {
    onSubmit(data)
  }

  const onInvalidSubmission: SubmitErrorHandler<SignInFormUserInput> = (
    errors,
  ) => {
    console.error(errors)
  }

  const isButtonDisabled =
    Object.keys(errors).length > 0 || Object.keys(dirtyFields).length === 0

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
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
    </View>
  )
}
