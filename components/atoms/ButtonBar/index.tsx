import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '../Button'

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
        <Button
          type="ghost"
          key={index}
          title={buttonProp.text}
          onPress={buttonProp.onPress}
        />
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
    borderRadius: 5,
    flex: 1,
  },
})
