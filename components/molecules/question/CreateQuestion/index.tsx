import { useAuth } from '@/hooks'
import { ScrollView, StyleSheet } from 'react-native'

import { CreateQuestionForm } from '@/components/molecules/forms'
import { CreateQuestionType } from '@/types/question'
import { useCreateQuestion } from '@/hooks'
import { FC } from 'react'
import { useCreateQuestionForm } from '@/hooks/forms/question/createQuestionForm'

type CreateQuestionProps = {
  onQuestionCreated: () => void
}

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

export const CreateQuestion: FC<CreateQuestionProps> = ({
  onQuestionCreated,
}) => {
  const { control, formState, getValues } = useCreateQuestionForm()
  const { mutateAsync } = useCreateQuestion()
  const { session } = useAuth()

  const user = session?.user

  const handleCreateQuestion = async () => {
    if (!user) {
      throw new Error('User is not authenticated')
    }

    const { title, description, visibility, deadline } = getValues()

    const question = {
      ...defaultQuestion,
      title,
      description,
      visibility,
      author_id: user.id,
      deadline,
    }

    await mutateAsync(question)

    onQuestionCreated()
  }

  return (
    <ScrollView
      contentContainerStyle={styles.createQuestionFormContainer}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <CreateQuestionForm
        onSubmit={handleCreateQuestion}
        control={control}
        formState={formState}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  createQuestionFormContainer: {
    // flex: 1,
    paddingBottom: 24,
  },
})
