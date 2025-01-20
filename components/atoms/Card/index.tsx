import { useAdjustColor, useThemeColor } from '@/hooks'
import { useMemo } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  showPressedColor = true,
  ...rest
}) => {
  const theme = useThemeColor()
  const pressedColor = useAdjustColor(theme.background, 20)

  const shouldShowPressedColor = useMemo(() => {
    return showPressedColor && onPress
  }, [showPressedColor, onPress])

  const handleOnPress = () => {
    if (onPress) {
      onPress()
    }
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        { backgroundColor: theme.background },
        shouldShowPressedColor && pressed
          ? { backgroundColor: pressedColor }
          : {},
      ]}
      onPress={handleOnPress}
      {...rest}
    >
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
  },
})
