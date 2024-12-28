import { CustomSafeAreaView } from '@/components'
import { Profile } from '@/components/organisms/Profile'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function ProfileScreen() {
  return (
    <CustomSafeAreaView style={styles.container} horizontal>
      <Profile />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
