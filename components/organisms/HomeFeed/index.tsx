import { PublicQuestions } from '@/components/molecules/question/PublicQuestions'
import { UserQuestions } from '@/components/molecules/question/UserQuestions'
import { useFetchPublicQuestions } from '@/hooks/question/useFetchPublicQuestions'
import { useRouter } from 'expo-router'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type HomeFeedProps = {
  onQuestionCardPress: (questionId: string) => void
}

const HomeFeed: React.FC<HomeFeedProps> = ({ onQuestionCardPress }) => {
  const [selectedFilter, setSelectedFilter] = React.useState<
    'public' | 'private'
  >('public')
  const { data, error, isLoading } = useFetchPublicQuestions()
  const router = useRouter()

  if (isLoading) return <Text>Loading...</Text>

  if (error || !data) return <Text>Error: {error?.message}</Text>

  const handleSelect = (questionId: string) => {
    onQuestionCardPress(questionId)
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
            selectedFilter === 'private' && styles.selectedButton,
          ]}
          onPress={() => setSelectedFilter('private')}
        >
          <Text style={styles.buttonText}>My Questions</Text>
        </TouchableOpacity>
      </View>
      {selectedFilter === 'public' && (
        <PublicQuestions onSelect={handleSelect} />
      )}
      {selectedFilter === 'private' && (
        <UserQuestions onSelect={handleSelect} />
      )}
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
