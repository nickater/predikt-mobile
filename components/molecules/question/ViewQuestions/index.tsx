import { useFetchQuestionsByUser } from '@/hooks/question/useFetchQuestionsByUser'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../atoms'

export const ViewQuestions = (): React.JSX.Element => {
  const { data } = useFetchQuestionsByUser()

  if (!data) return <Text>Loading...</Text>

  return (
    <View style={styles.container}>
      <View style={styles.questionSection}>
        {data.map((question) => (
          <Text key={question.id}>{question.title}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  questionSection: {
    paddingTop: 20,
  },
})
