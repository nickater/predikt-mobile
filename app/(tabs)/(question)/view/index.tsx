import { CustomSafeAreaView, ViewQuestions } from '@/components'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'

const QuestionScreen = () => {
  const router = useRouter()
  const handleQuestionPress = (questionId: string) => {
    router.push(`/(tabs)/(question)/detail/${questionId}`)
  }

  const handleAddQuestionPress = () => {
    router.push(`/(tabs)/(question)/create`)
  }

  return (
    <CustomSafeAreaView style={styles.container}>
      <ViewQuestions
        onQuestionPress={handleQuestionPress}
        onAddQuestionPress={handleAddQuestionPress}
      />
    </CustomSafeAreaView>
  )
}

export default QuestionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
