import { Card, Text } from '@/components/atoms'
import { useAuth, useCreatePrediction, useFetchQuestionDetail } from '@/hooks'
import { formatDateTime } from '@/utils/stringFormat/dateFormatter'
import { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import {
  CreatePredictionForm,
  CreatePredictionFormInputs,
} from '../../forms/CreatePredictionForm/CreatePredictionForm'
import { useCreatePredictionForm } from '../../forms/CreatePredictionForm/useCreatePredictionForm'
import { ShowPredictions } from '../../prediction/ShowPredictions'

type QuestionDetailProps = {
  questionId: string
  onPredictionSubmit: () => void
}

const USER_PREDICTION_EXISTS = 'You have already made a prediction'
const USER_PREDICTION_DOES_NOT_EXIST = 'You have not made a prediction'

const PREDICTION_DEADLINE_PASSED = 'The deadline for predictions has passed'

export const QuestionDetail = ({
  questionId,
  onPredictionSubmit,
}: QuestionDetailProps) => {
  const {
    data: question,
    isError,
    error,
    isLoading,
  } = useFetchQuestionDetail(questionId)
  const { mutateAsync } = useCreatePrediction()
  const { session } = useAuth()
  const createPredictionForm = useCreatePredictionForm()

  const hasQuestionDeadlinePassed = useMemo(() => {
    if (!question) return false
    const deadline = new Date(question.deadline)
    const now = new Date()
    return now > deadline
  }, [question])

  const allowPrediction = useMemo(() => {
    if (!question) return false

    if (hasQuestionDeadlinePassed) return false

    if (question.predictionExists) return false

    return true

  }, [question, hasQuestionDeadlinePassed])

  const showPredictions = useMemo(() => {
    if (!question) return false

    if (hasQuestionDeadlinePassed) return true
  }, [question, hasQuestionDeadlinePassed])

  const userPredictionStatus = useMemo(() => {
    if (!question) return ''

    if (question.predictionExists) return USER_PREDICTION_EXISTS

    if (hasQuestionDeadlinePassed) return PREDICTION_DEADLINE_PASSED

    return USER_PREDICTION_DOES_NOT_EXIST
  }, [question, hasQuestionDeadlinePassed])

  const formattedDeadline = useMemo(() => {
    if (!question) return ''
    const date = new Date(question.deadline)
    return formatDateTime(date)
  }, [question])

  
  if (isLoading) return <Text>Loading...</Text>

  if (isError || !question) return <Text>Error: {error?.message}</Text>

  const onSubmit = async (data: CreatePredictionFormInputs) => {
    if (!session?.user) return

    await mutateAsync({
      user_id: session.user.id,
      question_id: question.id,
      prediction: data.prediction,
    })

    createPredictionForm.reset()

    onPredictionSubmit()
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Card style={{ backgroundColor: '#f9f9f9' }}>
        <View>
          <Text variant="header2" style={styles.title}>
            {question.title}
          </Text>

          <Text>{question.description}</Text>
        </View>
      </Card>
      <Card>
        <View>
          <Text>Deadline: {formattedDeadline}</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={styles.description}>Status: {`${hasQuestionDeadlinePassed ? 'Closed' : 'Open'}`}</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text>{userPredictionStatus}</Text>
        </View>
      </Card>
      {allowPrediction ? (
        <Card>
          <View>
            <Text>Make your prediction</Text>
            <CreatePredictionForm
              {...createPredictionForm}
              onSubmit={onSubmit}
            />
          </View>
        </Card>
      ) : null}

      { showPredictions ? (
        <ShowPredictions questionId={question.id} show />
      ) : null
      }
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginVertical: 8,
  },
  description: {
    // marginBottom: 20,
    color: 'red',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  infoText: {
    flex: 1,
    marginBottom: 8,
  },
})
