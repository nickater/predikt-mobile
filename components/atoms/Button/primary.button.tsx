import { FC } from 'react'
import ButtonBase from 'react-native-ui-lib/button'
import { ButtonProps } from './types'

export const PrimaryButton: FC<ButtonProps> = (
  props = {
    outline: false,
    label: '',
    onPress: () => {},
  },
) => {
  return <ButtonBase size={'large'} {...props} />
}
