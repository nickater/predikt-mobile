import { useFetchQuestionDetail } from '@/hooks/question/useFetchQuestionDetail'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../atoms'

interface QuestionDetailProps {
  questionId: string
}

const QuestionDetail = ({
  questionId,
}: QuestionDetailProps): React.JSX.Element => {
  const { data, isError, error, isLoading } = useFetchQuestionDetail(questionId)

  if (isLoading) return <Text>Loading...</Text>

  if (isError || !data) return <Text>Error: {error?.message}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.content}>{data.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
})

export default QuestionDetail
