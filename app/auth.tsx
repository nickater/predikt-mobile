import { Button, CustomSafeAreaView, SignIn, SignUp } from '@/components'
import { useAuth } from '@/hooks'
import { Redirect } from 'expo-router'
import { useState } from 'react'

export default function Auth() {
  const [shouldShowRegistration, setShouldShowRegistration] = useState(false)

  const { session } = useAuth()

  const handleToggle = () => {
    setShouldShowRegistration((prev) => !prev)
  }

  if (session) {
    return <Redirect href={'/(tabs)/(question)'} />
  }

  return (
    <CustomSafeAreaView
      style={{
        flex: 1,
      }}
      horizontal
    >
      {shouldShowRegistration ? <SignUp /> : <SignIn />}
      <Button
        title={
            shouldShowRegistration
              ? 'Sign In'
              : 'Register'
        }
        onPress={handleToggle}
      />
    </CustomSafeAreaView>
  )
}
