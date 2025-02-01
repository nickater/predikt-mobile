import { CustomSafeAreaView } from '@/components'
import { ProfileSettingsScreen } from '@/components/organisms/ProfileV2'
import { StyleSheet } from 'react-native'

export default function ProfileTab() {
  return (
    <CustomSafeAreaView style={styles.container} bottom={false} horizontal>
      <ProfileSettingsScreen />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
