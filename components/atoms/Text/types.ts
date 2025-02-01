import { FC, PropsWithChildren } from 'react'
import { TextProps as RNTextProps } from 'react-native'

export type TextVariant =
  | 'regular'
  | 'bold'
  | 'italic'
  | 'light'
  | 'medium'
  | 'semiBold'
  | 'extraBold'
  | 'thin'
  | 'underline'
  | 'strikethrough'
  | 'uppercase'
  | 'lowercase'
  | 'header1'
  | 'header2'
  | 'header3'

export type TextPosition = 'left' | 'center' | 'right'

export type Color = 'primary' | 'secondary' | 'tertiary' | 'error' | 'success'

export type TextProps = FC<
  PropsWithChildren<
    RNTextProps & {
      variant?: TextVariant
      position?: TextPosition
      color?: Color
      inverted?: boolean
    }
  >
>
