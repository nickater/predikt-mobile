import { useThemeColor } from '@/hooks'
import { Theme } from '@/libs/RNUILib'
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
  const styles = useMemo(() => makeStyles(theme), [theme])

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
        shouldShowPressedColor && pressed ? styles.pressed : {},
        style,
      ]}
      onPress={handleOnPress}
      {...rest}
    >
      {children}
    </Pressable>
  )
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: 8,
      backgroundColor: theme.surface,
    },
    pressed: {
      backgroundColor: theme.backgroundVariant,
    },
  })
