import { CreateQuestion, CustomSafeAreaView } from '@/components'
import { StyleSheet } from 'react-native'

export default () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <CreateQuestion />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
