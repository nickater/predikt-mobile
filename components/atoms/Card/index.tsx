import React, { useState } from 'react'
import { Pressable, StyleSheet, ViewProps } from 'react-native'

interface CardProps extends ViewProps {
  children: React.ReactNode
  onPress?: () => void
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        pressed || isPressed ? styles.pressed : null,
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
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
