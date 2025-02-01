import { useAuth, useThemeColor } from '@/hooks'
import { ScrollView, StyleSheet } from 'react-native'
import { AccountSection } from './account'
import { ProfileSection } from './profileSection'
import { SettingsSection } from './settings'

export const ProfileSettingsScreen = () => {
  // const { data: profile } = useProfile()
  const { signOut } = useAuth()
  const theme = useThemeColor()

  const handleLogoutPress = () => {
    signOut()
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ProfileSection />
      <SettingsSection />
      <AccountSection theme={theme} onLogoutPress={handleLogoutPress} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 24,
  },
})
