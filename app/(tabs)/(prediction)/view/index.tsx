import { CustomSafeAreaView } from '@/components'
import { ViewPredictions } from '@/components/molecules/prediction/ViewPredictions'
import { StyleSheet } from 'react-native'

const ViewPredictionsScreen = () => {
  return <CustomSafeAreaView style={styles.container} horizontal>
    
    <ViewPredictions />
  </CustomSafeAreaView>
}

export default ViewPredictionsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
