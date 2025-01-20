import { useThemeColor } from '@/hooks'
import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { RoundButton } from '@/atoms/Button/round.button'
import { ButtonProps } from './types'

type ActionButtonProps = {
  floatLocation?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
} & ButtonProps

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onPress,
  floatLocation,
  ...rest
}) => {
  const theme = useThemeColor()
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
        backgroundColor: theme.textSecondary,
        color: theme.background,
        elevation: 4,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        opacity: 0.9,
        width: 60,
        height: 60,
        ...mappedFloatLocation[floatLocation || 'bottom-right'],
      },
    }).button
  }, [floatLocation, mappedFloatLocation, theme])

  return (
    <RoundButton
      label={label}
      onPress={onPress}
      style={buttonStyle}
      text40L
      {...rest}
    />
  )
}
