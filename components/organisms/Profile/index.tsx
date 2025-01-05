import { Button } from '@/components/atoms'
import {
  BottomSheetWrapper,
  UpdatePassword,
  UpdateUsername,
} from '@/components/molecules'
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
      <View style={styles.credentialsContainer}>
        <Button.Primary label="Update Username" onPress={showUpdateUsername} />
        <Button.Primary label="Update Password" onPress={showUpdatePassword} />
        <Button.Primary label="Sign Out" onPress={signOut} />
      </View>
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
    marginTop: 16,
    justifyContent: 'center',
    gap: 16,
  },
})
