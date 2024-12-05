import { Button } from '@/components/atoms/Button'
import { useAuth } from '@/hooks/auth'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Settings = () => {
  const { signOut } = useAuth()

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
