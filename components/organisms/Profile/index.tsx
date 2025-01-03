import { Text } from '@/components/atoms'
import { Button } from '@/components/atoms/Button'
import { useAuth } from '@/hooks/auth'
import { useProfile } from '@/hooks/profile/useGetProfile'
import { StyleSheet, View } from 'react-native'

export const Profile = () => {
  const { signOut } = useAuth()
  const { data: profile } = useProfile()

  if (!profile) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text position="center" variant="header1">
        Hello, {profile?.username}
      </Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
})
