import { FC, useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text } from '../Text'

interface ButtonBarProps {
  buttonProps: {
    text: string
    onPress: () => void
  }[]
}

export const ButtonBar: FC<ButtonBarProps> = ({ buttonProps }) => {
  const [selectedButton, setSelectedButton] = useState(0)

  const handlePress = (index: number) => {
    return () => {
      setSelectedButton(index)
      buttonProps[index].onPress()
    }
  }

  return (
    <View style={styles.container}>
      {buttonProps.map((buttonProp, index) => (
        <Pressable
          key={index}
          style={({ pressed }) => [
            styles.button,
            selectedButton === index && styles.selectedButton,
          ]}
          onPress={handlePress(index)}
        >
          <Text variant="paragraph" position="center">
            {buttonProp.text}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    flex: 1,
  },
  selectedButton: {
    backgroundColor: 'rgb(210, 230, 255)',
  },
})
