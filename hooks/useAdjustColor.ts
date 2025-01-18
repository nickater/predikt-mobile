import { adjustColor, AdjustColorProps } from '@/utils/color'
import { useColorScheme } from 'react-native'
import { useMemo } from 'react'

export const useAdjustColor = (
  hex: AdjustColorProps['hex'],
  amount: AdjustColorProps['amount'],
) => {
  const mode = useColorScheme()
  const direction = mode === 'dark' ? 'lighter' : 'darker'

  return useMemo(() => {
    return adjustColor(hex, amount, direction)
  }, [hex, amount, direction])
}
