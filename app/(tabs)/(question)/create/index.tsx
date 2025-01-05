import { CreateQuestion, CustomSafeAreaView } from '@/components'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'

const CreateQuestionScreen = () => {
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

export default CreateQuestionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
