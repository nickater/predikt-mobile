import { QuestionType } from '@/types/question'
import { getPredictionsAndQuestionByQuestionId } from './shared'

export const getPredictionsByQuestionId = async (
  questionId: QuestionType['id'],
) => {
  return getPredictionsAndQuestionByQuestionId(questionId)
}
