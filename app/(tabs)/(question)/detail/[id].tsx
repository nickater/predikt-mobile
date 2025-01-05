import { CustomSafeAreaView } from '@/components'
import { QuestionDetail } from '@/components/molecules/question'
import { useLocalSearchParams, useRouter } from 'expo-router'

const QuestionDetailScreen = () => {
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

export default QuestionDetailScreen
