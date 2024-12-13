import { Button, CustomSafeAreaView, SignIn, SignUp } from '@/components'
import { useState } from 'react'

export default function Auth() {
  const [shouldShowRegistration, setShouldShowRegistration] = useState(false)

  return (
    <CustomSafeAreaView
      style={{
        flex: 1,
      }}
    >
      {shouldShowRegistration ? <SignUp /> : <SignIn />}
      <Button
        title={shouldShowRegistration ? 'Sign In' : 'Register'}
        onPress={() => setShouldShowRegistration(!shouldShowRegistration)}
      />
    </CustomSafeAreaView>
  )
}
