import { checkIfPredictionExists } from '@/queries/prediction/checkIfPredictionExists'
import { createPrediction } from '@/queries/prediction/createPrediction'
import { CreatePredictionType } from '@/types/prediction'
import { mapSupabaseError } from '@/utils/supabase/mapError'
import { PostgrestError } from '@supabase/supabase-js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { getUserPredictionsQueryKey } from '@/queries/prediction/getPredictionsByUser'

export function useCreatePrediction() {
  const client = useSupabase()
  const queryClient = useQueryClient()

  const doesPredictionExist = async (questionId: string, userId: string) => {
    const data = await checkIfPredictionExists(client, questionId, userId)

    return data
  }

  const mutationFn = async (prediction: CreatePredictionType) => {
    const exists = await doesPredictionExist(
      prediction.question_id,
      prediction.user_id,
    )

    if (exists) {
      throw new Error('Prediction already exists')
    }

    const { data } = await createPrediction(client, prediction)

    return data
  }

  const onError = (error: Error) => {
    const postgrestError = error as unknown as PostgrestError
    const message = mapSupabaseError(postgrestError)

    console.error('useCreatePrediction', message, error)
  }

  const onSuccess = async () => {
    const user = await client.auth.getUser()
    const userId = user.data.user.id
    const queryKey = getUserPredictionsQueryKey(userId)
    queryClient.invalidateQueries({
      queryKey,
    })
  }

  return useMutation({ mutationFn, onError, onSuccess })
}
