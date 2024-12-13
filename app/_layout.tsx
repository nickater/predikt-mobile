import { Providers } from '@/providers'
import { Slot } from 'expo-router'
import 'react-native-reanimated'

export default function App() {
  return (
    <Providers>
      <Slot />
    </Providers>
  )
}
