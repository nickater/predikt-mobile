import { Card, Text } from '@/components/atoms'
import { useAuth, useCreatePrediction, useFetchQuestionDetail } from '@/hooks'
import { formatDateTime } from '@/utils/stringFormat/dateFormatter'
import { useMemo } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import {
  CreatePredictionForm,
  CreatePredictionFormInputs,
} from '../../forms/CreatePredictionForm/CreatePredictionForm'
import { useCreatePredictionForm } from '../../forms/CreatePredictionForm/useCreatePredictionForm'

type QuestionDetailProps = {
  questionId: string
  onPredictionSubmit: () => void
}

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

  const createPredictionForm = useCreatePredictionForm()

  const formattedDeadline = useMemo(() => {
    if (!question) return ''
    const date = new Date(question.deadline)
    return formatDateTime(date)
  }, [question])

  const { mutateAsync } = useCreatePrediction()
  const { session } = useAuth()

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
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={{ backgroundColor: '#f9f9f9' }}>
        <View>
          <Text variant="header2" style={styles.title}>
            {question.title}
          </Text>
        </View>
      </Card>
      <Card>
        <View>
          <Text>Deadline: {formattedDeadline}</Text>
        </View>
        <View>
          <Text style={styles.description}>Status: Open</Text>
        </View>
      </Card>
      {!question.predictionExists ? (
        <Card>
          <View>
            <Text>Make your prediction</Text>
            <CreatePredictionForm
              {...createPredictionForm}
              onSubmit={onSubmit}
            />
          </View>
        </Card>
      ) : (
        <Card>
          <View>
            <Text>You have already made a prediction</Text>
          </View>
        </Card>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
