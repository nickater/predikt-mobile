import { FC } from 'react'
import ButtonBase from 'react-native-ui-lib/button'

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'ghost' | 'link' | 'disabled'
  disabled?: boolean
  outline?: boolean
  label: string
  onPress: () => void
}
export const PrimaryButton: FC<ButtonProps> = (
  props = {
    color: 'primary',
    outline: false,
    label: '',
    onPress: () => {},
  },
) => {
  return <ButtonBase size={'large'} {...props} />
}
