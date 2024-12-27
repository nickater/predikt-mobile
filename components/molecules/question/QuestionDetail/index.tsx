import Card from '@/components/atoms/Card'
import { useFetchQuestionDetail } from '@/hooks/question/useFetchQuestionDetail'
import { formatShortDate } from '@/utils/stringFormat/dateFormatter'
import { useMemo } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ConditionalText, Text } from '../../../atoms'

interface QuestionDetailProps {
  questionId: string
}

export const QuestionDetail = ({
  questionId,
}: QuestionDetailProps): React.JSX.Element => {
  const {
    data: question,
    isError,
    error,
    isLoading,
  } = useFetchQuestionDetail(questionId)

  const formattedDeadline = useMemo(() => {
    if (!question) return ''
    const date = new Date(question.deadline)
    return formatShortDate(date)
  }, [question])

  const formattedCreatedAt = useMemo(() => {
    if (!question || !question.created_at) return ''
    const date = new Date(question.created_at)
    return formatShortDate(date)
  }, [question])

  if (isLoading) return <Text>Loading...</Text>

  if (isError || !question) return <Text>Error: {error?.message}</Text>

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="header2" position="center" style={styles.title}>
        {question.title}
      </Text>
      <ConditionalText variant="bold" condition={question.description}>
        {question.description}
      </ConditionalText>
      <Card>
        <View style={styles.row}>
          <Text style={styles.infoText}>Created: {formattedCreatedAt}</Text>
          <Text style={styles.infoText}>Deadline: {formattedDeadline}</Text>
        </View>
        <View style={styles.row}>
          {/* <Text style={styles.infoText}>
            Show Prediction Count:{' '}
            {question.show_prediction_count ? 'Yes' : 'No'}
          </Text> */}
          <Text style={styles.infoText}>
            Total Predictions: {question.total_predictions}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.infoText}>View Count: {question.view_count}</Text>
          <Text style={styles.infoText}>Visibility: {question.visibility}</Text>
        </View>
      </Card>
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
