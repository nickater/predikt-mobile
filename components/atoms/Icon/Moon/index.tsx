import Icon from '@expo/vector-icons/FontAwesome'
import { FC } from 'react'
import { IconProps } from '../types'

export const Moon: FC<IconProps> = ({
  size = 24,
  color = 'black',
  ...rest
}) => {
  return <Icon name="moon-o" size={size} color={color} {...rest} />
}
