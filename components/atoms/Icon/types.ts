import { TextProps } from 'react-native'

export type IconProps = {
  size?: number
  color?: string
  direction?: 'up' | 'down' | 'left' | 'right'
} & TextProps
