import { useFetchQuestionsByUser } from '@/hooks/question/useFetchQuestionsByUser'
import { StyleSheet, View } from 'react-native'
import { Text } from '../atoms'

export const ViewQuestion = (): React.JSX.Element => {
  const { data } = useFetchQuestionsByUser()

  if (!data) return <Text>Loading...</Text>

  return (
    <View style={styles.container}>
      <Text>ViewQuestions</Text>

      {data.map((question) => (
        <Text key={question.id}>{question.text}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
})
