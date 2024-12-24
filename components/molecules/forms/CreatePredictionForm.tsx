import { CreatePredictionType } from '@/types/prediction'
import { FC } from 'react'
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button, Text, TextInput } from '../../atoms'

export type CreatePredictionFormInputs = Pick<
  CreatePredictionType,
  'prediction'
>

type CreatePredictionFormProps = {
  onSubmit: (data: CreatePredictionFormInputs) => void
}

export const CreatePredictionForm: FC<CreatePredictionFormProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePredictionFormInputs>({
    defaultValues: {
      prediction: '',
    },
  })

  const onValidSubmission = (data: CreatePredictionFormInputs) => {
    onSubmit(data)
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

      <Button
        title="Submit"
        onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
      />
    </View>
  )
}
