import { FC, useCallback, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PublicQuestions } from '../PublicQuestions'
import { UserQuestions } from '../UserQuestions'
import { ButtonBar } from '@/components/atoms/ButtonBar'
import { Divider } from '@/components/atoms/Divider'
import ActionButton from '@/components/atoms/ActionButton'

type ViewQuestionsProps = {
  onQuestionPress: (questionId: string) => void
  onAddQuestionPress: () => void
}

export const ViewQuestions: FC<ViewQuestionsProps> = ({
  onQuestionPress,
  onAddQuestionPress,
}): React.JSX.Element => {
  const [filter, setFilter] = useState<'public' | 'private'>('public')

  const handleQuestionPress = useCallback(
    (questionId: string) => {
      onQuestionPress(questionId)
    },
    [onQuestionPress],
  )

  const handleFilterPress = (filter: 'public' | 'private') => {
    return () => setFilter(filter)
  }

  const questionMap = useMemo(
    () => ({
      all: <PublicQuestions onSelect={handleQuestionPress} />,
      public: <PublicQuestions onSelect={handleQuestionPress} />,
      private: <UserQuestions onSelect={handleQuestionPress} />,
    }),
    [handleQuestionPress],
  )

  return (
    <>
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
      <ActionButton title="+" onPress={onAddQuestionPress} />
    </>
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
