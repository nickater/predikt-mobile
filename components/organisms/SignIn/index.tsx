import { Text } from '@/components/atoms'
import { useAuth } from '@/hooks'
import { useState } from 'react'
import { View } from 'react-native'

import { SignInForm } from '@/components/molecules'
import { SignInUserInput } from './types'

export const SignIn = () => {
  const { signIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOnSubmit = async (data: SignInUserInput) => {
    setLoading(true)
    setError(null)
    try {
      await signIn(data)
    } catch {
      setError('Sign in failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View>
      <Text variant="header1" position="center" style={{ marginBottom: 20 }}>
        Sign In
      </Text>
      {error && (
        <Text variant="highlighted" position="center">
          {error}
        </Text>
      )}
      <SignInForm onSubmit={handleOnSubmit} />
      {loading && (
        <Text variant="paragraph" position="center">
          Signing in...
        </Text>
      )}
    </View>
  )
}
