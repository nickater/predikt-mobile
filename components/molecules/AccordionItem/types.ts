import { SharedValue } from 'react-native-reanimated'

export type AccordionItemProps = {
  isExpanded: SharedValue<boolean>
  children: React.ReactNode
  viewKey: string
  style?: any
  duration?: number
}
