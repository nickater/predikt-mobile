import React, { FC } from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native'

export const TextInput: FC<TextInputProps> = ({ style, ...rest }) => {
  return (
    <View style={styles.container}>
      <RNTextInput {...rest} style={[styles.textInput, style]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  textInput: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
})
