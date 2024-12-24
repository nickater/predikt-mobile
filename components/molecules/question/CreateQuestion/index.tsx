import { useAuth } from '@/hooks/auth'
import { useCreateQuestion } from '@/hooks/question/useCreateQuestion'
import { StyleSheet, View } from 'react-native'

import {
  CreateQuestionForm,
  CreateQuestionFormInputsPick,
} from '@/components/molecules/forms/CreateQuestionForm'
import { CreateQuestion as CreateQuestionEntity } from '@/types/entities'

export const CreateQuestion = (): React.JSX.Element => {
  const { mutate } = useCreateQuestion()
  const { session } = useAuth()

  const user = session?.user

  const defaultQuestion: CreateQuestionEntity = {
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
      author_id: user.id,
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    }

    await mutate(question)
  }

  return (
    <View style={styles.createQuestionFormContainer}>
      <CreateQuestionForm onSubmit={handleCreateQuestion} />
    </View>
  )
}

const styles = StyleSheet.create({
  createQuestionFormContainer: {
    // padding: 20,
  },
})
