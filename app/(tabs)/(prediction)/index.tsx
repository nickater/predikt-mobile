import { CustomSafeAreaView } from '@/components/molecules/CustomSafeAreaView'
import { UserPredictions } from '@/components/molecules/prediction/UserPredictions'

export default function PredictionTab() {
  return (
    <CustomSafeAreaView>
      <UserPredictions />
    </CustomSafeAreaView>
  )
}
