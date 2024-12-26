import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { PublicQuestions } from '../PublicQuestions'
import { UserQuestions } from '../UserQuestions'

type ViewQuestionsProps = {
  filter?: 'public' | 'private'
  onQuestionPress: (questionId: string) => void
}
export const ViewQuestions: FC<ViewQuestionsProps> = ({
  filter = 'public',
  onQuestionPress,
}): React.JSX.Element => {
  const handleQuestionPress = (questionId: string) => {
    onQuestionPress(questionId)
  }

  if (filter === 'public') {
    return <PublicQuestions onSelect={handleQuestionPress} />
  }

  return <UserQuestions onSelect={handleQuestionPress} />
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  questionSection: {
    paddingTop: 20,
  },
})
