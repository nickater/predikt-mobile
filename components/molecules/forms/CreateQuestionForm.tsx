import { CreateQuestionType } from '@/types/question'
import { FC } from 'react'
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { View } from 'react-native'
import { Button, Text, TextInput } from '../../atoms'

type Inputs = Pick<CreateQuestionType, 'visibility' | 'title' | 'description'>

type CreateQuestionFormProps = {
  onSubmit: SubmitHandler<Inputs>
}
export const CreateQuestionForm: FC<CreateQuestionFormProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      visibility: 'public',
      title: '',
      description: '',
    },
  })

  const onValidSubmission = (data: Inputs) => {
    onSubmit(data)
    reset()
  }

  const onInvalidSubmission: SubmitErrorHandler<Inputs> = (errors) => {
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
            placeholder="Question"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title && <Text>This field is required.</Text>}

      <Button
        title="Submit"
        onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
      />
    </View>
  )
}

// New question form with:
// Question text
// Deadline picker
// Privacy settings
// Public
// Private (invite only)
// Friends only
// Optional evidence/context
// Result validation method

// create a type from this form

type CreateQuestionFormInputs = {
  text: string
  deadline: Date
  is_public: boolean
  evidence: string
  result_validation_method: string
}
