import { useAuth } from '@/hooks'
import { router } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/atoms'

import { SignInUserInput } from './types'
import { SignInForm } from '@/components/molecules'

export const SignIn = () => {
  const { signIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOnSubmit = async (data: SignInUserInput) => {
    setLoading(true)
    setError(null)
    try {
      const result = await signIn(data)

      if (result) {
        router.replace('/')
      }
    } catch {
      setError('Sign in failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View>
      <Text variant="header1" position="center">
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
