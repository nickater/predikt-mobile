import Icon from '@expo/vector-icons/FontAwesome'
import { FC } from 'react'
import { IconProps } from '../types'

export const Bell: FC<IconProps> = ({
  size = 24,
  color = 'black',
  ...rest
}) => {
  return <Icon name="bell" size={size} color={color} {...rest} />
}
