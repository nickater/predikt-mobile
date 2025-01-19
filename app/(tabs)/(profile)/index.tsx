import { CustomSafeAreaView } from '@/components'
import { Profile } from '@/components/organisms/Profile'
import { StyleSheet } from 'react-native'

export default function ProfileTab() {
  return (
    <CustomSafeAreaView style={styles.container} bottom={false}>
      <Profile />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
