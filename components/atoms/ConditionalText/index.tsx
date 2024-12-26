import React, { PropsWithChildren } from 'react'
import { Text } from '../Text'
import { TextPosition, TextVariant } from '../Text/types'

type ConditionalTextProps = {
  variant?: TextVariant
  position?: TextPosition
  condition: unknown
}

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
