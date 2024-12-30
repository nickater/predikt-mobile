import { CustomSafeAreaView } from '@/components'
import { QuestionDetail } from '@/components/molecules/question'
import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <CustomSafeAreaView>
      <QuestionDetail questionId={id} />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
