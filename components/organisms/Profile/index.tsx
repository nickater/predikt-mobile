import { Text } from '@/components/atoms'
import { Button } from '@/components/atoms/Button'
import { useAuth } from '@/hooks/auth'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Profile = () => {
  const { signOut } = useAuth()

  return (
    <View style={styles.container}>
      <Text position="center" variant="header1">
        Profile
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
