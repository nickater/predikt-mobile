import { useAuth } from '@/hooks/auth'
import { router } from 'expo-router'
import { View } from 'react-native'
import { Text } from '../../atoms'
import { SignInForm } from '../../molecules/forms/SignInForm/SignInForm'
import { SignInUserInput } from './types'

export const SignIn = () => {
  const { signIn } = useAuth()

  const handleOnSubmit = async (data: SignInUserInput) => {
    await signIn(data)
    router.replace('/')
  }

  return (
    <View>
      <Text variant="header1" position="center">
        Sign In
      </Text>

      <SignInForm onSubmit={handleOnSubmit} />
    </View>
  )
}
