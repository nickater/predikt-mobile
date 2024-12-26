import { CustomSafeAreaView } from '@/components/molecules/CustomSafeAreaView'
import { UserPredictions } from '@/components/molecules/prediction/UserPredictions'

export default function PredictionDefault() {
  return (
    <CustomSafeAreaView horizontal>
      <UserPredictions />
    </CustomSafeAreaView>
  )
}
