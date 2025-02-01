import { Text } from '@/components/atoms'
import { SignUpForm, SignUpFormUserInput } from '@/components/molecules'
import { useAuth } from '@/hooks'
import { useState } from 'react'
import { View } from 'react-native'

export const SignUp = () => {
  const { signUp } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOnSubmit = async (data: SignUpFormUserInput) => {
    setLoading(true)
    setError(null)
    try {
      await signUp(data)
    } catch {
      setError('Sign up failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View>
      <Text variant="header1" position="center" style={{ marginBottom: 20 }}>
        Create Account
      </Text>
      {error && (
        <Text color="error" position="center" style={{ marginBottom: 10 }}>
          {error}
        </Text>
      )}
      <SignUpForm onSubmit={handleOnSubmit} />
      {loading && (
        <Text position="center" style={{ marginTop: 10 }}>
          Signing up...
        </Text>
      )}
    </View>
  )
}
