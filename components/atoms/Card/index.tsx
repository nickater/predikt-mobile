import { useMemo } from 'react'
import { Pressable, StyleSheet, ViewProps } from 'react-native'

type CardProps = ViewProps & {
  children: React.ReactNode
  onPress?: () => void
  showPressedColor?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  showPressedColor = true,
  ...rest
}) => {
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
        shouldShowPressedColor && pressed ? styles.pressed : null,
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
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
  },
  pressed: {
    backgroundColor: '#e0e0e0',
  },
})
