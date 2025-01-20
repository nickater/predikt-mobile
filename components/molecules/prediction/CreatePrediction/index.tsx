import { CreatePredictionForm } from '@/components/molecules/forms'
import { useCreatePrediction } from '@/hooks'
import { useCreatePredictionForm } from '@/hooks/forms'
import { CreatePredictionType } from '@/types/prediction'
import { FC, useEffect } from 'react'
import { CreatePredictionProps } from './types'

export const CreatePrediction: FC<CreatePredictionProps> = ({
  userId,
  questionId,
}) => {
  const { control, formState, ...rest } = useCreatePredictionForm()
  const { mutateAsync } = useCreatePrediction()

  const onSubmit = async () => {
    const values = rest.getValues()

    const prediction: CreatePredictionType = {
      ...values,
      question_id: questionId,
      user_id: userId,
    }
    await mutateAsync(prediction)
  }

  useEffect(() => {
    console.log('CreatePrediction', userId, questionId)
  }, [userId, questionId])

  return (
    <CreatePredictionForm
      control={control}
      formState={formState}
      onSubmit={onSubmit}
    />
  )
}
