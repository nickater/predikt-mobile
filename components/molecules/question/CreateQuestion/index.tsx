import { useAuth } from '@/hooks'
import { ScrollView, StyleSheet } from 'react-native'

import {
  CreateQuestionForm,
  CreateQuestionFormInputsPick,
} from '@/components/molecules/forms/CreateQuestionForm'
import { CreateQuestionType } from '@/types/question'
import { useCreateQuestion } from '@/hooks'
import { FC } from 'react'

type CreateQuestionProps = {
  onQuestionCreated: () => void
}

export const CreateQuestion: FC<CreateQuestionProps> = ({
  onQuestionCreated,
}) => {
  const { mutateAsync } = useCreateQuestion()
  const { session } = useAuth()

  const user = session?.user

  const defaultQuestion: CreateQuestionType = {
    author_id: '',
    deadline: '',
    allow_anonymous_predictions: false,
    description: '',
    is_active: true,
    show_prediction_count: false,
    title: '',
    total_predictions: 0,
    view_count: 0,
    visibility: 'public',
  }

  const handleCreateQuestion = async (input: CreateQuestionFormInputsPick) => {
    if (!user) {
      throw new Error('User is not authenticated')
    }

    const question = {
      ...defaultQuestion,
      title: input.title,
      description: input.description,
      visibility: input.visibility,
      allow_anonymous_predictions: input.allow_anonymous_predictions,
      author_id: user.id,
      deadline: new Date(input.deadline).toISOString(),
    }

    await mutateAsync(question)

    onQuestionCreated()
  }

  return (
    <ScrollView
      style={styles.createQuestionFormContainer}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <CreateQuestionForm onSubmit={handleCreateQuestion} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  createQuestionFormContainer: {
    // padding: 20,
    // flex: 1,
  },
})
