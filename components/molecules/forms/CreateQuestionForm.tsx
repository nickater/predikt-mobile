import { CreateQuestionType } from '@/types/question'
import { FC, useState } from 'react'
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { View, StyleSheet, Switch, Platform, Pressable } from 'react-native'
import { Button, Text, TextInput } from '../../atoms'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'

export type CreateQuestionFormInputsPick = Pick<
  CreateQuestionType,
  | 'visibility'
  | 'title'
  | 'description'
  | 'deadline'
  | 'allow_anonymous_predictions'
>

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
    validate: (value: string) => {
      const date = new Date(value)
      return date > new Date() || 'Deadline must be in the future'
    },
  },
}

export const CreateQuestionForm: FC<CreateQuestionFormProps> = ({
  onSubmit,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<CreateQuestionFormInputsPick>({
    defaultValues: {
      visibility: 'public',
      title: '',
      description: '',
      deadline: new Date().toISOString(),
      allow_anonymous_predictions: false,
    },
  })

  const deadline = watch('deadline')

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

  const renderDatePicker = (field: any) => {
    if (Platform.OS === 'ios') {
      return (
        <DateTimePicker
          value={field.value ? new Date(field.value) : new Date()}
          mode="datetime"
          display="spinner"
          onChange={(event, selectedDate) => {
            field.onChange(selectedDate?.toISOString())
          }}
          style={styles.iosDatePicker}
        />
      )
    }

    return (
      <>
        <Pressable
          onPress={() => setShowDatePicker(true)}
          style={styles.dateButton}
        >
          <Text style={styles.dateButtonText}>
            {new Date(field.value).toLocaleString()}
          </Text>
        </Pressable>

        {showDatePicker && (
          <DateTimePicker
            value={field.value ? new Date(field.value) : new Date()}
            mode="datetime"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false)
              if (selectedDate) {
                field.onChange(selectedDate.toISOString())
              }
            }}
          />
        )}
      </>
    )
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Information</Text>

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

        <Text style={styles.label}>Deadline</Text>
        <Controller
          control={control}
          rules={validationRules.deadline}
          render={({ field }) => renderDatePicker(field)}
          name="deadline"
        />
        {errors.deadline && (
          <Text style={styles.errorText}>{errors.deadline.message}</Text>
        )}

        <Text style={styles.label}>Visibility</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Picker
              selectedValue={value}
              onValueChange={onChange}
              style={styles.picker}
            >
              <Picker.Item label="Public" value="public" />
              <Picker.Item label="Private" value="private" />
            </Picker>
          )}
          name="visibility"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Allow Anonymous Predictions</Text>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Switch onValueChange={onChange} value={!!value} />
            )}
            name="allow_anonymous_predictions"
          />
        </View>
      </View>

      <Button
        title={isSubmitting ? 'Submitting...' : 'Submit'}
        onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
        disabled={isSubmitting}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    gap: 16,
  },
  section: {
    gap: 12,
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
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
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
    height: 180,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    // height: 50,
  },
})
