import Icon from '@expo/vector-icons/FontAwesome'
import { FC } from 'react'
import { IconProps } from '../types'

export const Lock: FC<IconProps> = ({
  size = 24,
  color = 'black',
  ...rest
}) => {
  return <Icon name="lock" size={size} color={color} {...rest} />
}
