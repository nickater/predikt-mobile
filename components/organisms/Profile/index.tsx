import { Button } from '@/components/atoms/Button'
import { BottomSheetWrapper } from '@/components/molecules/BottomSheetWrapper'
import { UpdatePassword } from '@/components/molecules/profile/UpdatePassword'
import { UpdateUsername } from '@/components/molecules/profile/UpdateUsername'
import { useAuth, useUpdateUsername } from '@/hooks'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

export const Profile = () => {
  const { signOut, session } = useAuth()
  const { mutateAsync } = useUpdateUsername()

  const [updateUsernameVisible, setUpdateUsernameVisible] = useState(false)
  const [updatePasswordVisible, setUpdatePasswordVisible] = useState(false)

  const showUpdateUsername = () => {
    setUpdateUsernameVisible(true)
    setUpdatePasswordVisible(false)
  }

  const showUpdatePassword = () => {
    setUpdateUsernameVisible(false)
    setUpdatePasswordVisible(true)
  }

  const handleUsernameUpdate = async ({ username }: { username: string }) => {
    const userId = session?.user?.id

    await mutateAsync({ id: userId, newUsername: username })
    setUpdateUsernameVisible(false)
    return true
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Update Username" onPress={showUpdateUsername} />

      <Button title="Update Password" onPress={showUpdatePassword} />
      <BottomSheetWrapper
        show={updateUsernameVisible}
        onClose={() => setUpdateUsernameVisible(false)}
        onOpen={() => {}}
      >
        <UpdateUsername onSubmit={handleUsernameUpdate} />
      </BottomSheetWrapper>

      <BottomSheetWrapper
        show={updatePasswordVisible}
        onClose={() => setUpdatePasswordVisible(false)}
        onOpen={() => {}}
      >
        <UpdatePassword />
      </BottomSheetWrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  credentialsContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    gap: 16,
  },
})
