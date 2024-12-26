import { useFetchQuestionDetail } from '@/hooks/question/useFetchQuestionDetail'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, ConditionalText } from '../../../atoms'
import { useMemo } from 'react'
import { formatDate } from '@/utils/stringFormat/dateFormatter'

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
    return formatDate(date)
  }, [question])

  const formattedCreatedAt = useMemo(() => {
    if (!question || !question.created_at) return ''
    const date = new Date(question.created_at)
    return formatDate(date)
  }, [question])

  if (isLoading) return <Text style={styles.loadingText}>Loading...</Text>

  if (isError || !question)
    return <Text style={styles.errorText}>Error: {error?.message}</Text>

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{question.title}</Text>
        <Text style={styles.description}>{question.description}</Text>
        <Text>Created: {formattedCreatedAt}</Text>
        <Text>Deadline: {formattedDeadline}</Text>
        <Text>Is Active: {question.is_active ? 'Yes' : 'No'}</Text>
        <ConditionalText condition={question.last_activity_at}>
          Last Activity At: {question.last_activity_at}
        </ConditionalText>
        <Text>
          Show Prediction Count: {question.show_prediction_count ? 'Yes' : 'No'}
        </Text>
        <Text>Total Predictions: {question.total_predictions}</Text>
        <Text>View Count: {question.view_count}</Text>
        <Text>Visibility: {question.visibility}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  detailsContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
})
