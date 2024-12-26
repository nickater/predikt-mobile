import { useFetchPublicQuestions } from '@/hooks/question/useFetchPublicQuestions'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../atoms'
import SelectableQuestions from '../SelectableQuestions'

export const PublicQuestions = (): React.JSX.Element => {
  const { data, error, isLoading } = useFetchPublicQuestions()

  if (isLoading) return <Text>Loading...</Text>

  if (error || !data) return <Text>Error: {error?.message}</Text>

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
