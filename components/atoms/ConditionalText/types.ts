import { TextPosition, TextVariant } from '@/components/atoms/Text/types'

export type ConditionalTextProps = {
  variant?: TextVariant
  position?: TextPosition
  condition: unknown
}
