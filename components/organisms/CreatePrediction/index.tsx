import { useAuth } from '@/hooks/auth'
import { useCreatePrediction } from '@/hooks/prediction/useCreatePrediction'
import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CreatePredictionForm } from '../../molecules'
import { CreatePredictionUserInput } from './types'

type CreatePredictionProps = {
  question_id: string
}
export const CreatePrediction: FC<CreatePredictionProps> = ({
  question_id,
}): React.JSX.Element => {
  const { mutate } = useCreatePrediction()
  const { session } = useAuth()

  const user = session?.user

  const handleCreatePrediction = async ({
    text,
  }: CreatePredictionUserInput) => {
    if (!user) return

    mutate({
      text,
      user_id: user?.id,
      question_id,
    })
  }

  return (
    <View>
      <Text>CreatePrediction</Text>

      <View style={styles.createPredictionFormContainer}>
        <CreatePredictionForm onSubmit={handleCreatePrediction} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  createPredictionFormContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
})
