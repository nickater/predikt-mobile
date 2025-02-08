import { Button, Card, Divider, Text, TextInput } from '@/components/atoms'
import { RadioGroup } from '@/components/molecules/RadioGroup'
import { Controller } from 'react-hook-form'
import { StyleSheet, View, useColorScheme } from 'react-native'
import DateTimePicker from 'react-native-date-picker'
import { CreateQuestionFormProps } from './types'

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
    validate: (dateString: string) => {
      const date = new Date(dateString)
      return date > new Date() || 'Deadline must be in the future'
    },
  },
  visibility: {
    required: 'Please select a visibility option',
  },
}

export const CreateQuestionForm: CreateQuestionFormProps = ({
  control,
  formState: { errors },
  onSubmit,
}) => {
  const scheme = useColorScheme()

  return (
    <View style={styles.formContainer}>
      <Card style={styles.section}>
        <Text variant="header1">Basic Information</Text>
        <Text variant="header3">Question</Text>

        <Controller
          control={control}
          rules={validationRules.title}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Enter your question"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
          name="title"
        />

        {errors.title && (
          <Text style={styles.errorText}>{errors.title.message}</Text>
        )}

        <Text variant="header3">Description</Text>
        <Controller
          control={control}
          rules={validationRules.description}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.textArea]}
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
      </Card>

      <Card style={styles.section}>
        <Text variant="header1">Settings</Text>
        <Text variant="header3">Deadline</Text>
        <Controller
          control={control}
          rules={validationRules.deadline}
          render={({ field }) => (
            <DateTimePicker
              date={new Date(field.value)}
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
        <Text variant="header3">Visibility</Text>
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
      </Card>

      <View style={styles.submitButtonContainer}>
        <Button.Primary
          // label={isSubmitting ? 'Submitting...' : 'Submit'}
          label="Submit"
          onPress={onSubmit}
          // disabled={isSubmitting}
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
    gap: 12,
    paddingVertical: 16,
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
  textArea: {
    minHeight: 40,
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
