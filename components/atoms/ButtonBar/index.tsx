import { FC } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '../Text'

interface ButtonBarProps {
  buttonProps: {
    text: string
    onPress: () => void
  }[]
}

export const ButtonBar: FC<ButtonBarProps> = ({ buttonProps }) => {
  return (
    <View style={styles.container}>
      {buttonProps.map((buttonProp, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={buttonProp.onPress}
        >
          <Text position="center" variant="bold">
            {buttonProp.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    flex: 1,
  },
})
