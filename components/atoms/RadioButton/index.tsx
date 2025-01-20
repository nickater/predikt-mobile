import { useThemeColor } from '@/hooks'
import { FC } from 'react'
import { RadioButton as RadioButtonBase } from 'react-native-ui-lib'
import { RadioButtonProps } from './types'

export const RadioButton: FC<RadioButtonProps> = ({ value, label }) => {
  const theme = useThemeColor()

  return <RadioButtonBase color={theme.accent} value={value} label={label} />
}
