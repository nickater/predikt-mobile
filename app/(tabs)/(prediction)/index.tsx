import { CustomSafeAreaView } from '@/components/atoms'
import { UserPredictions } from '@/components/molecules/prediction/UserPredictions'

export default function PredictionTab() {
  return (
    <CustomSafeAreaView>
      <UserPredictions />
    </CustomSafeAreaView>
  )
}
