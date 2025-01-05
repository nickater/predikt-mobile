import { Button, CustomSafeAreaView, SignIn, SignUp } from '@/components'
import { useAuth } from '@/hooks'
import { Redirect } from 'expo-router'
import { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'

export default function Auth() {
  const [shouldShowRegistration, setShouldShowRegistration] = useState(false)

  const { session } = useAuth()

  const handleToggle = () => {
    setShouldShowRegistration((prev) => !prev)
  }

  if (session) {
    return <Redirect href={'/(tabs)/(question)/view'} />
  }

  return (
    <CustomSafeAreaView
      horizontal
    >
      <KeyboardAwareScrollView contentContainerStyle={{
        justifyContent: 'center',
        flex: 1,
      }}>
        {shouldShowRegistration ? <SignUp /> : <SignIn />}
      <Button
        title={
            shouldShowRegistration
              ? 'Sign in to existing account'
              : 'Create account'
        }
        type='link'
        onPress={handleToggle}
      />
      </KeyboardAwareScrollView>
    </CustomSafeAreaView>
  )
}

// TODO: Abstract the logic for toggling between sign in and sign up into a hook
// TODO: Move the UI into a separate component