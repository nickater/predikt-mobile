import SelectableQuestions from '@/components/molecules/question/SelectableQuestions'
import { useAuth } from '@/hooks/auth'
import { useCreatePrediction } from '@/hooks/prediction/useCreatePrediction'
import { useFetchQuestionsByUser } from '@/hooks/question/useFetchQuestionsByUser'
import { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CreatePredictionForm } from '../../molecules'
import { CreatePredictionUserInput } from './types'

export const CreatePrediction: FC = (): React.JSX.Element => {
  const [questionId, setQuestionId] = useState<string | null>(null)
  const { mutate: createPrediction } = useCreatePrediction()
  const { data: questions } = useFetchQuestionsByUser()
  const { session } = useAuth()

  const user = session?.user

  const handleCreatePrediction = async ({
    text,
  }: CreatePredictionUserInput) => {
    if (!user) return
    if (!questionId) return

    createPrediction({
      text,
      user_id: user?.id,
      question_id: questionId,
    })
  }

  return (
    <View style={styles.container}>
      <View>
        {questions && (
          <SelectableQuestions
            questions={questions}
            onSelect={(question) => {
              console.log(question.id)
              setQuestionId(question.id)
            }}
          />
        )}
      </View>
      <View style={styles.createPredictionFormContainer}>
        <CreatePredictionForm onSubmit={handleCreatePrediction} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  createPredictionFormContainer: {
    // padding: 20,
  },
})
