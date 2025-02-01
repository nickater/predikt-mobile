import Icon from '@expo/vector-icons/FontAwesome'
import { FC } from 'react'
import { IconProps } from '../types'

export const QuestionCircle: FC<IconProps> = ({
  size = 24,
  color = 'black',
  direction = 'down',
  ...rest
}) => {
  return <Icon name="question-circle" size={size} color={color} {...rest} />
}
