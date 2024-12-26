import { useFetchOwnQuestions } from '@/hooks/question/useFetchOwnQuestions'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../atoms'
import SelectableQuestions from '../SelectableQuestions'

export const UserQuestions = (): React.JSX.Element => {
  const { data } = useFetchOwnQuestions()

  if (!data) return <Text>Loading...</Text>

  return (
    <SelectableQuestions
      questions={data}
      onSelect={(question) => console.log('Selected question:', question)}
    />
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
