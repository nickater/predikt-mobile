import { CreateQuestion, CustomSafeAreaView, Handle } from '@/components'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'

const CreateQuestionScreen = () => {
  const router = useRouter()

  const handleOnQuestionCreated = () => {
    router.back()
  }

  return (
    <CustomSafeAreaView style={styles.container} bottom={false} top={false}>
      <Handle />
      <CreateQuestion onQuestionCreated={handleOnQuestionCreated} />
    </CustomSafeAreaView>
  )
}

export default CreateQuestionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
