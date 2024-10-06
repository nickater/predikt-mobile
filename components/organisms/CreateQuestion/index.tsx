import { useAuth } from '@/hooks/auth'
import { useCreateQuestion } from '@/hooks/question/useCreateQuestion'
import { StyleSheet, View } from 'react-native'

import { Text } from '@/components/atoms/Text'

import { CustomSafeAreaView } from '@/components/molecules/CustomSafeAreaView'
import { CreateQuestionForm } from '@/components/molecules/forms/CreateQuestionForm'
import { CreateQuestionUserInput } from './types'

export const CreateQuestion = (): React.JSX.Element => {
  const { mutate } = useCreateQuestion()
  const { session } = useAuth()

  const user = session?.user

  const handleCreateQuestion = async ({ text }: CreateQuestionUserInput) => {
    if (!user) return

    mutate({
      text,
      user_id: user?.id,
    })
  }

  return (
    <CustomSafeAreaView>
      <Text>CreateQuestion</Text>

      <View style={styles.createQuestionFormContainer}>
        <CreateQuestionForm onSubmit={handleCreateQuestion} />
      </View>
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  createQuestionFormContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
})
