import { Text } from '@/components/atoms'
import { useFetchPublicQuestions } from '@/hooks/question/useFetchPublicQuestions'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

type HomeFeedProps = {
  onQuestionCardPress: (questionId: string) => void
}

const HomeFeed: React.FC<HomeFeedProps> = ({ onQuestionCardPress }) => {
  const { data, error, isLoading } = useFetchPublicQuestions()

  if (isLoading) return <Text>Loading...</Text>

  if (error || !data) return <Text>Error: {error?.message}</Text>

  return (
    <View style={styles.container}>
      <Text>Home Feed</Text>
    </View>
  )
}

export default HomeFeed

const styles = StyleSheet.create({
  container: {},
})
