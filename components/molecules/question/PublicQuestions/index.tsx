import { SelectableQuestions, Text } from '@/components/atoms'
import { LoadingSpinner } from '@/components/atoms/Loading/LoadingSpinner'
import { useFetchPublicQuestions } from '@/hooks'
import { QuestionType } from '@/types/question'
import { FC } from 'react'

type PublicQuestionsProps = {
  onSelect: (questionId: string) => void
}
export const PublicQuestions: FC<PublicQuestionsProps> = ({
  onSelect,
}) => {
  const { data, error, isLoading } = useFetchPublicQuestions()

  const handleQuestionSelect = (question: QuestionType) => {
    onSelect(question.id)
  }

  if (isLoading) return <LoadingSpinner />

  if (error || !data) return <Text>Error: {error?.message}</Text>

  return (
    <SelectableQuestions questions={data} onSelect={handleQuestionSelect} />
  )
}
