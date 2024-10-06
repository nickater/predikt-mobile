import { Button, CustomSafeAreaView } from '@/components'
import { useAuth } from '@/hooks/auth'
import { router } from 'expo-router'
import React from 'react'

export default () => {
  const { signOut } = useAuth()

  const handleNavigateToPrediction = () => {
    router.navigate('/(app)/prediction')
  }

  const handleNavigateToQuestion = () => {
    router.navigate('/(app)/question')
  }

  return (
    <CustomSafeAreaView>
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Prediction" onPress={handleNavigateToPrediction} />
      <Button title="Question" onPress={handleNavigateToQuestion} />
    </CustomSafeAreaView>
  )
}
