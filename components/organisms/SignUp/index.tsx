import { Text } from '@/components/atoms'
import { SignUpForm, SignUpFormUserInput } from '@/components/molecules'
import { useAuth } from '@/hooks'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'

export const SignUp = () => {
  const { signUp } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOnSubmit = async (data: SignUpFormUserInput) => {
    setLoading(true)
    setError(null)
    try {
      const result = await signUp(data)

      if (result) {
        router.replace('/')
      }
    } catch {
      setError('Sign up failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View>
      <Text variant="header1" position="center">
        Sign Up
      </Text>
      {error && (
        <Text variant="highlighted" position="center">
          {error}
        </Text>
      )}
      <SignUpForm onSubmit={handleOnSubmit} />
      {loading && (
        <Text variant="paragraph" position="center">
          Signing up...
        </Text>
      )}
    </View>
  )
}
