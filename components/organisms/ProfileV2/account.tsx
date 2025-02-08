import { Card, Text } from '@/components/atoms'
import { Chevron, QuestionCircle } from '@/components/atoms/Icon'
import { Theme } from '@/libs/RNUILib'
import { FC } from 'react'
import { Alert, Pressable, StyleSheet } from 'react-native'

type AccountSectionProps = {
  onLogoutPress: () => void
  theme: Theme
}
export const AccountSection: FC<AccountSectionProps> = ({
  onLogoutPress,
  theme,
}) => {
  const styles = makeStyles(theme)

  const handleLogoutPress = () => {
    onLogoutPress()
  }

  const handleHelpPress = () => {
    Alert.alert('TODO: Implement help screen')
  }

  return (
    <Card style={styles.container}>
      <Pressable style={styles.accountItem} onPress={handleHelpPress}>
        <QuestionCircle size={20} />
        <Text style={styles.accountLabel}>Help & Support</Text>
      </Pressable>
      <Pressable style={styles.accountItem} onPress={handleLogoutPress}>
        <Chevron size={20} color="red" />
        <Text>Log Out</Text>
      </Pressable>
    </Card>
  )
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 20,
    },
    accountItem: {
      flexDirection: 'row',
      gap: 16,
    },
    accountLabel: {
      fontSize: 16,
    },
    logoutLabel: {
      color: 'red',
    },
  })
