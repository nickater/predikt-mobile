/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native'
import { theme } from '@/libs/RNUILib/'

export function useThemeColor() {
  const scheme = useColorScheme() ?? 'light'

  return theme[scheme]
}
