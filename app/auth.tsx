import { Button, CustomSafeAreaView, SignIn, SignUp } from '@/components'
import { useState } from 'react'

export default function Auth() {
  const [shouldShowRegistration, setShouldShowRegistration] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleToggle = () => {
    setLoading(true)
    setTimeout(() => {
      setShouldShowRegistration(!shouldShowRegistration)
      setLoading(false)
    }, 500)
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
          loading
            ? 'Loading...'
            : shouldShowRegistration
              ? 'Sign In'
              : 'Register'
        }
        onPress={handleToggle}
        disabled={loading}
      />
    </CustomSafeAreaView>
  )
}
