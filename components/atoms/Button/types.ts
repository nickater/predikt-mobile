import { type ButtonProps as ButtonBaseProps } from 'react-native-ui-lib'

export type ButtonProps = {
  disabled?: boolean
  outline?: boolean
  label: string
  fontSize?: FontSize
} & ButtonBaseProps

export type FontSize = 'small' | 'medium' | 'large'
