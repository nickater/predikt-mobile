import { useThemeColor } from '@/hooks'
import { FC } from 'react'
import { RadioButton as RadioButtonBase } from 'react-native-ui-lib'
import { RadioButtonProps } from './types'

export const RadioButton: FC<RadioButtonProps> = ({ value, label }) => {
  const theme = useThemeColor()

  return (
    <RadioButtonBase
      color={theme.textPrimary}
      value={value}
      label={label}
      labelStyle={{ color: theme.textPrimary }}
    />
  )
}
