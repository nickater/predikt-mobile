import { supabase } from '@/libs/supabase'
import { QuestionType } from '@/types/question'

export const getPredictionsAndQuestionByQuestionId = async (
  questionId: QuestionType['id'],
) => {
  return supabase
    .from('predictions')
    .select(
      `
      *,
      question:question_id(
        *,
        author:author_id(*)
      )
      `,
    )
    .eq('question_id', questionId)
    .throwOnError()
    .order('created_at', { ascending: false })
}
