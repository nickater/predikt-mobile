import { FC } from 'react'
import { StyleSheet } from 'react-native'

import { TouchableOpacity } from 'react-native'
import { Text } from '../Text'

type ButtonProps = {
  title: string
  onPress: () => void
  type?: 'primary' | 'secondary' | 'ghost' | 'disabled'
  disabled?: boolean
}
export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  type = 'primary',
  disabled = false,
}) => {
  const getButtonStyle = () => {
    if (disabled) {
      return buttonStyles.disabledButton
    }

    switch (type) {
      case 'primary':
        return buttonStyles.primaryButton
      case 'secondary':
        return buttonStyles.secondaryButton
      case 'ghost':
        return buttonStyles.ghostButton
      case 'disabled':
        return buttonStyles.disabledButton
      default:
        return buttonStyles.primaryButton
    }
  }

  const getButtonTextStyle = () => {
    if (disabled) {
      return buttonStyles.disabledButtonText
    }

    switch (type) {
      case 'primary':
        return buttonStyles.primaryButtonText
      case 'secondary':
        return buttonStyles.secondaryButtonText
      case 'ghost':
        return buttonStyles.ghostButtonText

      case 'disabled':
        return buttonStyles.disabledButtonText
      default:
        return buttonStyles.primaryButtonText
    }
  }

  return (
    <TouchableOpacity
      style={[buttonStyles.button, getButtonStyle()]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={getButtonTextStyle()}>{title}</Text>
    </TouchableOpacity>
  )
}

const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ghostButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007bff',
  },
  ghostButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#d6d6d6',
  },
  disabledButtonText: {
    color: '#9e9e9e',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default buttonStyles
