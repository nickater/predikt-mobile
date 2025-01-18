import { CustomSafeAreaView, UserPredictions } from '@/components'
import { StyleSheet } from 'react-native'

const ViewPredictionsScreen = () => {
  return (
    <CustomSafeAreaView style={styles.container} horizontal>
      <UserPredictions />
    </CustomSafeAreaView>
  )
}

export default ViewPredictionsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
