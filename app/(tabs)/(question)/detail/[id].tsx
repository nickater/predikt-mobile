import { CustomSafeAreaView, Handle } from '@/components'
import { QuestionDetail } from '@/components/molecules/question'
import { useLocalSearchParams, useRouter } from 'expo-router'

const QuestionDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const router = useRouter()

  const handleOnPredictionSubmit = () => {
    router.back()
  }

  return (
    <CustomSafeAreaView top={false} horizontal>
      <Handle />
      <QuestionDetail
        questionId={id}
        onPredictionSubmit={handleOnPredictionSubmit}
      />
    </CustomSafeAreaView>
  )
}

export default QuestionDetailScreen
