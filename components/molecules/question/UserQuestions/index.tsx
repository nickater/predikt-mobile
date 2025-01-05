import { LoadingSpinner, SelectableQuestions } from '@/components/atoms'
import { useFetchOwnQuestions } from '@/hooks'
import { QuestionType } from '@/types/question'
import { FC } from 'react'

type UserQuestionsProps = {
  onSelect: (questionId: string) => void
}
export const UserQuestions: FC<UserQuestionsProps> = ({ onSelect }) => {
  const { data } = useFetchOwnQuestions()

  if (!data) return <LoadingSpinner />

  const handleQuestionSelect = (question: QuestionType) => {
    onSelect(question.id)
  }

  return (
    <SelectableQuestions
      showPredictionCount={true}
      questions={data}
      onSelect={handleQuestionSelect}
    />
  )
}
