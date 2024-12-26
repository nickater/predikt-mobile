import { CustomSafeAreaView } from '@/components'
import HomeFeed from '@/components/organisms/HomeFeed'
import { useRouter } from 'expo-router'

export default function Home() {
  const router = useRouter()

  const handleQuestionPress = (questionId: string) => {
    router.push(`/(app)/(question)/question-detail/${questionId}`)
  }

  return (
    <CustomSafeAreaView style={{ justifyContent: 'space-between' }}>
      <HomeFeed onQuestionCardPress={handleQuestionPress} />
    </CustomSafeAreaView>
  )
}
