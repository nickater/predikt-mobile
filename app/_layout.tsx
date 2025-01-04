import '@/libs/reanimated.config'

import { Providers } from '@/providers'
import { Stack } from 'expo-router'

export default function AppLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Providers>
  )
}
