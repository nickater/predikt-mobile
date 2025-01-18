import { FC } from 'react'
import ButtonBase from 'react-native-ui-lib/button'
import { ButtonProps } from './types'
import { useThemeColor } from '@/hooks'

export const PrimaryButton: FC<ButtonProps> = ({
  size = 'large',
  ...props
}) => {
  const theme = useThemeColor()

  return <ButtonBase size={size} {...props} backgroundColor={theme.secondary} />
}
