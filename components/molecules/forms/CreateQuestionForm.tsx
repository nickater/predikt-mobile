import { CreateQuestionType } from '@/types/question'
import { FC, useEffect } from 'react'
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { View } from 'react-native'
import { Button, Text, TextInput } from '../../atoms'

type Inputs = Pick<CreateQuestionType, 'text'>

type CreateQuestionFormProps = {
  onSubmit: SubmitHandler<Inputs>
}
export const CreateQuestionForm: FC<CreateQuestionFormProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      text: '',
    },
  })

  const onValidSubmission = (data: Inputs) => {
    console.log('valid submission', data)
    onSubmit(data)
  }

  const onInvalidSubmission: SubmitErrorHandler<Inputs> = (errors) => {
    console.error(errors)
  }

  useEffect(() => {
    console.log('CreateQuestionForm mounted')
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Question"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="text"
      />
      {errors.text && <Text>This field is required.</Text>}

      <Button
        title="Submit"
        onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
      />
    </View>
  )
}
