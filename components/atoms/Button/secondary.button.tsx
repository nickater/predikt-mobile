import { FC } from 'react'
import ButtonBase from 'react-native-ui-lib/button'
import { ButtonProps } from './types'

export const SecondaryButton: FC<ButtonProps> = ({
  size = 'large',
  ...props
}) => {
  return <ButtonBase size={'large'} {...props} />
}
