import { SafeAreaViewProps } from 'react-native-safe-area-context'

export type CustomSafeAreaViewProps = SafeAreaViewProps & {
  horizontal?: boolean
  top?: boolean
  bottom?: boolean
}
