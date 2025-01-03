import { CreateQuestion, CustomSafeAreaView } from '@/components'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'

export default () => {
  const router = useRouter()

  const handleOnQuestionCreated = () => {
    router.back()
  }

  return (
    <CustomSafeAreaView style={styles.container}>
      <CreateQuestion onQuestionCreated={handleOnQuestionCreated} />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
