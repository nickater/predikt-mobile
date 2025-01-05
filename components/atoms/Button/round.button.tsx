import { FC } from 'react'
import ButtonBase from 'react-native-ui-lib/button'
import { ButtonProps } from './types'

export const RoundButton: FC<ButtonProps> = (props) => {
  return <ButtonBase round {...props} />
}
