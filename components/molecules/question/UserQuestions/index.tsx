import { useFetchOwnQuestions } from '@/hooks/question/useFetchOwnQuestions'
import { QuestionType } from '@/types/question'
import { FC } from 'react'
import { SelectableQuestions, Text } from '../../../atoms'

type UserQuestionsProps = {
  onSelect: (questionId: string) => void
}
export const UserQuestions: FC<UserQuestionsProps> = ({
  onSelect,
}): React.JSX.Element => {
  const { data } = useFetchOwnQuestions()

  if (!data) return <Text>Loading...</Text>

  const handleQuestionSelect = (question: QuestionType) => {
    if (new Date(question.deadline) < new Date()) {
      alert('This question has expired.')
      return
    }

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
