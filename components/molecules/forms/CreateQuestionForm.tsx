import { Button, Divider, Text, TextInput } from '@/components/atoms'
import { CreateQuestionType } from '@/types/question'
import { FC, useMemo, useState } from 'react'
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { StyleSheet, View, useColorScheme } from 'react-native'
import { RadioGroup } from '../RadioGroup'
import DateTimePicker from 'react-native-date-picker'
import { DateUtils } from '@/utils/date'

export type CreateQuestionFormInputsPick = Pick<
  CreateQuestionType,
  'visibility' | 'title' | 'description'
> & { deadline: Date }

export type CreateQuestionFormProps = {
  onSubmit: SubmitHandler<CreateQuestionFormInputsPick>
}

const validationRules = {
  title: {
    required: 'Question text is required',
    minLength: {
      value: 10,
      message: 'Question must be at least 10 characters',
    },
  },
  description: {
    required: 'Description is required',
  },
  deadline: {
    required: 'Please select a deadline',
    validate: (date: Date) => {
      return date > new Date() || 'Deadline must be in the future'
    },
  },
}

export const CreateQuestionForm: FC<CreateQuestionFormProps> = ({
  onSubmit,
}) => {
  const startDate = useMemo(() => DateUtils.now(), [])
  const scheme = useColorScheme()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateQuestionFormInputsPick>({
    defaultValues: {
      visibility: 'public',
      title: '',
      description: '',
      deadline: DateUtils.fromDayjs(startDate),
    },
  })

  const onValidSubmission = async (data: CreateQuestionFormInputsPick) => {
    setIsSubmitting(true)
    try {
      await onSubmit(data)
      reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  const onInvalidSubmission: SubmitErrorHandler<
    CreateQuestionFormInputsPick
  > = (errors) => {
    console.error(errors)
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Information</Text>
        <Divider />
        <Text style={styles.label}>Question</Text>

        <Controller
          control={control}
          rules={validationRules.title}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your question"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="title"
        />

        {errors.title && (
          <Text style={styles.errorText}>{errors.title.message}</Text>
        )}

        <Text style={styles.label}>Description</Text>

        <Controller
          control={control}
          rules={validationRules.description}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Provide more context (optional)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value!}
              multiline
              numberOfLines={4}
            />
          )}
          name="description"
        />
        {errors.description && (
          <Text style={styles.errorText}>{errors.description.message}</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <Divider />
        <Text style={styles.label}>Deadline</Text>
        <Controller
          control={control}
          rules={validationRules.deadline}
          render={({ field }) => (
            <DateTimePicker
              date={field.value}
              mode="datetime"
              onDateChange={field.onChange}
              theme={scheme}
            />
          )}
          name="deadline"
        />
        {errors.deadline && (
          <Text style={styles.errorText}>{errors.deadline.message}</Text>
        )}
        <Text style={styles.label}>Visibility</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              initialValue={value}
              onValueChange={onChange}
              buttonData={[
                { label: 'Public', value: 'public' },
                { label: 'Private', value: 'private' },
              ]}
            />
          )}
          name="visibility"
        />
      </View>

      <View style={[styles.submitButtonContainer, styles.section]}>
        <Button.Primary
          label={isSubmitting ? 'Submitting...' : 'Submit'}
          onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
          disabled={isSubmitting}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    gap: 20,
    justifyContent: 'space-between',
  },
  section: {
    // gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 4,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  submitButtonContainer: {
    marginTop: 16,
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  dateButtonText: {
    fontSize: 16,
    color: '#000',
  },
  iosDatePicker: {
    height: 160,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
})
