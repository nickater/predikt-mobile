import { useForm } from 'react-hook-form'
import { CreateQuestionFormInputs } from './types'

// const validationRules = {
//   title: {
//     required: 'Question text is required',
//     minLength: {
//       value: 10,
//       message: 'Question must be at least 10 characters',
//     },
//   },
//   description: {
//     required: 'Description is required',
//   },
//   deadline: {
//     required: 'Please select a deadline',
//     validate: (date: Date) => {
//       return date > new Date() || 'Deadline must be in the future'
//     },
//   },
// }

export const useCreateQuestionForm = () => {
  return useForm<CreateQuestionFormInputs>({
    defaultValues: {
      title: '',
      description: '',
      deadline: new Date().toDateString(),
      visibility: 'public',
    },
    mode: 'onSubmit',
  })
}

export type UseCreateQuestionFormReturn = ReturnType<
  typeof useCreateQuestionForm
>

export type { CreateQuestionFormInputs }
