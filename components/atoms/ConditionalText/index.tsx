import { PropsWithChildren } from 'react'
import { Text } from '@/components/atoms/Text'
import { ConditionalTextProps } from './types'

export const ConditionalText: React.FC<
  PropsWithChildren<ConditionalTextProps>
> = ({ children, variant, position, condition }) => {
  if (!condition) {
    return null
  }

  return (
    <Text variant={variant} position={position}>
      {children}
    </Text>
  )
}
