import { SelectableQuestions, Text } from '@/components/atoms'
import { useFetchPublicQuestions } from '@/hooks'
import { QuestionType } from '@/types/question'
import { FC } from 'react'

type PublicQuestionsProps = {
  onSelect: (questionId: string) => void
}
export const PublicQuestions: FC<PublicQuestionsProps> = ({
  onSelect,
}): React.JSX.Element => {
  const { data, error, isLoading } = useFetchPublicQuestions()

  const handleQuestionSelect = (question: QuestionType) => {
    const hasQuestionDeadlineExpired = new Date(question.deadline) < new Date()

    if (hasQuestionDeadlineExpired) {
      alert('This question has expired.')
      return
    }

    onSelect(question.id)
  }

  if (isLoading) return <Text>Loading...</Text>

  if (error || !data) return <Text>Error: {error?.message}</Text>

  return (
    <SelectableQuestions questions={data} onSelect={handleQuestionSelect} />
  )
}
