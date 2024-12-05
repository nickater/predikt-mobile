import { useFetchQuestionsByUser } from '@/hooks/question/useFetchQuestionsByUser'
import { StyleSheet, View } from 'react-native'
import { Text } from '../atoms'

export const ViewQuestion = (): React.JSX.Element => {
  const { data } = useFetchQuestionsByUser()

  if (!data) return <Text>Loading...</Text>

  return (
    <View style={styles.container}>
      <Text variant="header2" style={{ textAlign: 'center' }}>
        Your Questions
      </Text>

      <View style={styles.questionSection}>
        {data.map((question) => (
          <Text key={question.id}>{question.text}</Text>
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
