import { FC, useCallback, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PublicQuestions } from '../PublicQuestions'
import { UserQuestions } from '../UserQuestions'
import { Button, ButtonBar, Divider } from '@/components/atoms'

type ViewQuestionsProps = {
  onQuestionPress: (questionId: string) => void
  onAddQuestionPress: () => void
}

export const ViewQuestions: FC<ViewQuestionsProps> = ({
  onQuestionPress,
  onAddQuestionPress,
}) => {
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
            { text: 'Personal', onPress: handleFilterPress('private') },
          ]}
        />
        <Divider />
        <View style={styles.listContainer}>{questionMap[filter]}</View>
      </View>
      <Button.Action
        label="+"
        onPress={onAddQuestionPress}
        floatLocation="bottom-right"
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
})
