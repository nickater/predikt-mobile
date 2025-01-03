import { CustomSafeAreaView } from '@/components'
import { QuestionDetail } from '@/components/molecules/question'
import { useLocalSearchParams, useRouter } from 'expo-router'

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
