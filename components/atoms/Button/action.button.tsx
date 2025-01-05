import { useMemo } from 'react'
import { RoundButton } from '../Button/round.button'
import { ButtonProps } from './types'
import { StyleSheet } from 'react-native'

type ActionButtonProps = {
  floatLocation?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
} & ButtonProps

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onPress,
  floatLocation,
}) => {
  const mappedFloatLocation = useMemo(
    () => ({
      'top-left': { top: 0, left: 0 },
      'top-right': { top: 0, right: 0 },
      'bottom-left': { bottom: 0, left: 0 },
      'bottom-right': { bottom: 20, right: 20 },
    }),
    [],
  )

  const buttonStyle = useMemo(() => {
    return StyleSheet.create({
      button: {
        position: 'absolute',
        width: 60,
        height: 60,
        ...mappedFloatLocation[floatLocation || 'bottom-right'],
      },
    }).button
  }, [floatLocation, mappedFloatLocation])

  return (
    <RoundButton label={label} onPress={onPress} style={buttonStyle} text40L />
  )
}
