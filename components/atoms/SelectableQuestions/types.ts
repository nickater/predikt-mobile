import { QuestionType } from '@/types/question'

export type SelectableQuestionsProps = {
  questions: (QuestionType & { predictionExists: boolean })[]
  onSelect: (question: QuestionType) => void
  selectedQuestionId?: string | null
  showPredictionCount?: boolean
}
