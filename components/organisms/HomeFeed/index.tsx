import { PublicQuestions } from '@/components/molecules/question/PublicQuestions'
import { UserQuestions } from '@/components/molecules/question/UserQuestions'
import { useFetchPublicQuestions } from '@/hooks/question/useFetchPublicQuestions'
import { QuestionType } from '@/types/question'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type HomeFeedProps = {}

const HomeFeed = (props: HomeFeedProps) => {
  const [selectedFilter, setSelectedFilter] = React.useState<'public' | 'own'>(
    'public',
  )
  const { data, error, isLoading } = useFetchPublicQuestions()

  if (isLoading) return <Text>Loading...</Text>

  if (error || !data) return <Text>Error: {error?.message}</Text>

  const handleSelect = (question: QuestionType) => {
    console.log('Selected question:', question)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedFilter === 'public' && styles.selectedButton,
          ]}
          onPress={() => setSelectedFilter('public')}
        >
          <Text style={styles.buttonText}>Public Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedFilter === 'own' && styles.selectedButton,
          ]}
          onPress={() => setSelectedFilter('own')}
        >
          <Text style={styles.buttonText}>My Questions</Text>
        </TouchableOpacity>
      </View>
      {selectedFilter === 'public' && <PublicQuestions />}
      {selectedFilter === 'own' && <UserQuestions />}
    </View>
  )
}

export default HomeFeed

const styles = StyleSheet.create({
  container: {
    // ...existing styles...
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ddd',
  },
  selectedButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#000',
  },
})
