import { Button, Text, TextInput } from '@/components/atoms'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'
import { CreatePredictionFormProps } from './types'

export const CreatePredictionForm: CreatePredictionFormProps = (form) => {
  const {
    control,
    formState: { errors },
    onSubmit,
  } = form

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

      <Button.Primary label="Submit" onPress={onSubmit} />
    </View>
  )
}
