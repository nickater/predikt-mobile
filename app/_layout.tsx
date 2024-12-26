import { Providers } from '@/providers'
import { Stack } from 'expo-router'
import 'react-native-reanimated'

export default function App() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(app)" />
      </Stack>
    </Providers>
  )
}
