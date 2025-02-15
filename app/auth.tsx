import { CustomSafeAreaView, SignIn, SignUp, Button } from '@/components'
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
    <CustomSafeAreaView horizontal>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1,
        }}
      >
        {shouldShowRegistration ? <SignUp /> : <SignIn />}
        <Button.Secondary
          style={{ marginTop: 20 }}
          link
          label={
            shouldShowRegistration
              ? 'Sign in to existing account'
              : 'Create account'
          }
          onPress={handleToggle}
        />
      </KeyboardAwareScrollView>
    </CustomSafeAreaView>
  )
}
