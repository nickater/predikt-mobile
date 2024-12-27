import { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PublicQuestions } from '../PublicQuestions'
import { UserQuestions } from '../UserQuestions'
import { ButtonBar } from '@/components/atoms/ButtonBar'
import { Divider } from '@/components/atoms/Divider'

type ViewQuestionsProps = {
  onQuestionPress: (questionId: string) => void
}
export const ViewQuestions: FC<ViewQuestionsProps> = ({
  onQuestionPress,
}): React.JSX.Element => {
  const [filter, setFilter] = useState<'public' | 'private'>('public')

  const handleQuestionPress = (questionId: string) => {
    onQuestionPress(questionId)
  }

  const handleFilterPress = (filter: 'public' | 'private') => {
    return () => setFilter(filter)
  }

  const questionMap = {
    public: <PublicQuestions onSelect={handleQuestionPress} />,
    private: <UserQuestions onSelect={handleQuestionPress} />,
  }

  return (
    <View style={styles.container}>
      <ButtonBar
        buttonProps={[
          { text: 'Public', onPress: handleFilterPress('public') },
          { text: 'Private', onPress: handleFilterPress('private') },
        ]}
      />
      <Divider />
      <View style={styles.listContainer}>{questionMap[filter]}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
})
