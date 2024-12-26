import { useFetchOwnQuestions } from '@/hooks/question/useFetchOwnQuestions'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../atoms'
import SelectableQuestions from '../../../atoms/SelectableQuestions'
import { FC } from 'react'
import { QuestionType } from '@/types/question'

type UserQuestionsProps = {
  onSelect: (questionId: string) => void
}
export const UserQuestions: FC<UserQuestionsProps> = ({
  onSelect,
}): React.JSX.Element => {
  const { data } = useFetchOwnQuestions()

  if (!data) return <Text>Loading...</Text>

  const handleQuestionSelect = (question: QuestionType) => {
    onSelect(question.id)
  }

  return (
    <SelectableQuestions questions={data} onSelect={handleQuestionSelect} />
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  questionSection: {
    paddingTop: 20,
  },
})
