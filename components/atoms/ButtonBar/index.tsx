import { FC, useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text } from '@/components/atoms/Text'
import { useAdjustColor, useThemeColor } from '@/hooks'
import { ButtonBarProps } from './types'

export const ButtonBar: FC<ButtonBarProps> = ({ buttonProps }) => {
  const [selectedButton, setSelectedButton] = useState(0)

  const theme = useThemeColor()
  const selectedButtonColor = useAdjustColor(theme.background, 120)

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
            {
              backgroundColor: theme.background,
            },
            selectedButton === index && {
              backgroundColor: selectedButtonColor,
            },
          ]}
          onPress={handlePress(index)}
        >
          <Text variant="bold" position="center">
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
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    flex: 1,
  },
})
