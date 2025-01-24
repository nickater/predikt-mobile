import '@/libs/reanimated.config'
import '@/libs/RNUILib'

import { Providers } from '@/providers'
import { Stack } from 'expo-router'

export default function AppLayout() {
  return (
    <Providers>
      <Stack
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Stack.Screen name="welcome" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="auth"
          options={{
            presentation: 'fullScreenModal',
          }}
        />
      </Stack>
    </Providers>
  )
}
