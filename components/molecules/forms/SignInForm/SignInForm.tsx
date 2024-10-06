import { FC } from 'react'
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button, Text, TextInput } from '../../../atoms'
import { SignInFormUserInput } from './types'

type CreatePredictionFormProps = {
  onSubmit: (data: SignInFormUserInput) => void
}

export const SignInForm: FC<CreatePredictionFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SignInFormUserInput>({
    defaultValues: {
      email: 'nick@mail.co',
      password: 'password',
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

      <Button
        title="Submit"
        onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
        disabled={isButtonDisabled}
      />
    </View>
  )
}
