import { Pressable, StyleSheet, ViewProps } from 'react-native'

type CardProps = ViewProps & {
  children: React.ReactNode
  onPress?: () => void
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  ...rest
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        onPress && pressed ? styles.pressed : null,
      ]}
      onPress={onPress}
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
