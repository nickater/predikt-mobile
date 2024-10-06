import { CreateQuestionType } from '@/types/question'

export type CreateQuestionUserInput = Omit<CreateQuestionType, 'user_id'>
