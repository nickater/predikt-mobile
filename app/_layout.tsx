import { Providers } from '@/providers'
import { Stack } from 'expo-router/stack'
import 'react-native-reanimated'

export default () => {
  return (
    <Providers>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth" />
      </Stack>
    </Providers>
  )
}
