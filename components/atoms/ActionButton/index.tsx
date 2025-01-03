import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { Text } from '../Text'

interface ActionButtonProps {
  title: string
  onPress: () => void
  style?: ViewStyle
}

const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text variant="header2" style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
})

export default ActionButton
