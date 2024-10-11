import { Button, CustomSafeAreaView } from '@/components'
import { useAuth } from '@/hooks/auth'
import React from 'react'

export default () => {
  const { signOut } = useAuth()

  return (
    <CustomSafeAreaView style={{ justifyContent: 'center' }}>
      <Button title="Prediction" onPress={handleNavigateToPrediction} />
      <Button title="Question" onPress={handleNavigateToQuestion} />
      <Button title="Sign Out" onPress={signOut} />
    </CustomSafeAreaView>
  )
}
