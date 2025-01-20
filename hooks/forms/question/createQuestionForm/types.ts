import { CreateQuestionType } from '@/types/question'
import { UseFormReturn } from 'react-hook-form'

export type CreateQuestionFormInputs = CreateQuestionType

export type CreatePredictionFormProps = UseFormReturn<CreateQuestionFormInputs>
