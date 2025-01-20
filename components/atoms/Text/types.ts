import { PropsWithChildren } from 'react'
import { TextProps as RNTextProps } from 'react-native'

export type TextVariant =
  | 'header1'
  | 'header2'
  | 'paragraph'
  | 'caption'
  | 'link'
  | 'highlighted'
  | 'bold'
  | 'bold2'
  | 'italic'
  | 'small'
  | 'large'

export type TextPosition = 'left' | 'center' | 'right'

export type TextProps = PropsWithChildren<
  RNTextProps & { variant?: TextVariant; position?: TextPosition }
>
