import { CustomSafeAreaView } from '@/components'
import { QuestionDetail } from '@/components/molecules/question'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const router = useRouter()

  const handleOnPredictionSubmit = () => {
    router.back()
  }

  return (
    <CustomSafeAreaView>
      <QuestionDetail
        questionId={id}
        onPredictionSubmit={handleOnPredictionSubmit}
      />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
