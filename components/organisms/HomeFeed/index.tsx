import SelectableQuestions from '@/components/molecules/question/SelectableQuestions'
import { useFetchPublicQuestions } from '@/hooks/question/useFetchPublicQuestions'
import { QuestionType } from '@/types/question'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface HomeFeedProps {}

const HomeFeed = (props: HomeFeedProps) => {
  const { data, error, isLoading } = useFetchPublicQuestions()

  if (isLoading) return <Text>Loading...</Text>

  if (error || !data) return <Text>Error: {error?.message}</Text>

  const handleSelect = (question: QuestionType) => {
    console.log('Selected question:', question)
  }

  return (
    <View style={styles.container}>
      <SelectableQuestions questions={data} onSelect={handleSelect} />
    </View>
  )
}

export default HomeFeed

const styles = StyleSheet.create({
  container: {},
})
