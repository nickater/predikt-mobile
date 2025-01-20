import { Button } from '@/components/atoms'
import { BottomSheetWrapper, UpdateUsername } from '@/components/molecules'
import { UpdatePassword } from '@/components/molecules/question/UpdatePassword'
import { useAuth, useProfile } from '@/hooks'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

export const Profile = () => {
  const { data: profile } = useProfile()
  const { signOut } = useAuth()

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

  const afterUpdateUsername = () => {
    setUpdateUsernameVisible(false)
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.credentialsContainer}>
        <Button.Primary
          label="Update Username"
          onPress={showUpdateUsername}
          fontSize="large"
        />
        <Button.Primary
          label="Update Password"
          onPress={showUpdatePassword}
          fontSize="large"
        />
        <Button.Primary label="Sign Out" onPress={signOut} fontSize="large" />
      </View>
      <BottomSheetWrapper
        show={updateUsernameVisible}
        onClose={() => setUpdateUsernameVisible(false)}
        onOpen={() => {}}
      >
        <UpdateUsername onSubmit={afterUpdateUsername} />
      </BottomSheetWrapper>

      <BottomSheetWrapper
        show={updatePasswordVisible}
        onClose={() => setUpdatePasswordVisible(false)}
        onOpen={() => {}}
      >
        <UpdatePassword userId={profile?.id} />
      </BottomSheetWrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  credentialsContainer: {
    marginTop: 16,
    justifyContent: 'center',
    gap: 16,
  },
})
