import { useAuth } from '@/hooks/auth'
import { useCreateQuestion } from '@/hooks/question/useCreateQuestion'
import { StyleSheet, View } from 'react-native'

import { CreateQuestionForm } from '@/components/molecules/forms/CreateQuestionForm'
import { CreateQuestionUserInput } from './types'

export const CreateQuestion = (): React.JSX.Element => {
  const { mutate } = useCreateQuestion()
  const { session } = useAuth()

  const user = session?.user

  const handleCreateQuestion = async ({
    text,
    is_public = false,
  }: CreateQuestionUserInput) => {
    if (!user) return

    mutate({
      text,
      user_id: user?.id,
      is_public,
    })
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
