import Icon from '@expo/vector-icons/FontAwesome'
import { FC } from 'react'
import { IconProps } from '../types'

export const Chevron: FC<IconProps> = ({
  size = 24,
  color = 'black',
  direction = 'right',
  ...rest
}) => {
  return (
    <Icon name={`chevron-${direction}`} size={size} color={color} {...rest} />
  )
}
