import { CreatePredictionFormInputs } from '@/components/molecules/forms/CreatePredictionForm'
import SelectableQuestions from '@/components/molecules/question/SelectableQuestions'
import { useAuth } from '@/hooks/auth'
import { useCreatePrediction } from '@/hooks/prediction/useCreatePrediction'
import { useFetchQuestionsByUser } from '@/hooks/question/useFetchQuestionsByUser'
import { QuestionType } from '@/types/question'
import { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CreatePredictionForm } from '../../molecules'

export const CreatePrediction: FC = (): React.JSX.Element => {
  const [questionId, setQuestionId] = useState<string | null>(null)
  const { mutate: createPrediction } = useCreatePrediction()
  const { data: questions } = useFetchQuestionsByUser()
  const { session } = useAuth()

  const user = session?.user

  const onSuccessfulPredictionCreation = (resetForm: () => void) => {
    return () => {
      setQuestionId(null)
      resetForm()
      handleSelectQuestion(null)
    }
  }

  const handleCreatePrediction = async (
    { prediction }: CreatePredictionFormInputs,
    resetForm: () => void,
  ) => {
    if (!user) return
    if (!questionId) return

    createPrediction(
      {
        prediction,
        user_id: user?.id,
        question_id: questionId,
      },
      {
        onSuccess: onSuccessfulPredictionCreation(resetForm),
      },
    )
  }

  const handleSelectQuestion = (question: QuestionType | null) => {
    if (!question) return setQuestionId(null)

    setQuestionId(question.id)
  }

  return (
    <View style={styles.container}>
      <View>
        {questions && (
          <SelectableQuestions
            questions={questions}
            onSelect={handleSelectQuestion}
            selectedQuestionId={questionId}
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
