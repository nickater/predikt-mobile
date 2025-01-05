import { CreatePredictionType } from '@/types/prediction'
import { FC } from 'react'
import { Controller, SubmitErrorHandler, UseFormReturn } from 'react-hook-form'
import { View } from 'react-native'
import { Button, Text, TextInput } from '../../../atoms'

export type CreatePredictionFormInputs = Pick<
  CreatePredictionType,
  'prediction'
>

type CreatePredictionFormProps = UseFormReturn<CreatePredictionFormInputs> & {
  onSubmit: (
    data: CreatePredictionFormInputs,
    resetForm: () => void,
  ) => Promise<void>
}

export const CreatePredictionForm: FC<CreatePredictionFormProps> = ({
  control,
  onSubmit,
  formState: { errors },
  handleSubmit,
  reset,
}) => {
  const onValidSubmission = (data: CreatePredictionFormInputs) => {
    onSubmit(data, reset)
  }

  const onInvalidSubmission: SubmitErrorHandler<CreatePredictionFormInputs> = (
    errors,
  ) => {
    console.error(errors)
  }

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Prediction"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="prediction"
      />
      {errors.prediction && <Text>This is required.</Text>}

      <Button.Primary
        label="Submit"
        onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
      />
    </View>
  )
}
