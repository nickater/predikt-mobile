import { ViewProps } from 'react-native'

export type CardProps = ViewProps & {
  children: React.ReactNode
  onPress?: () => void
  showPressedColor?: boolean
}
