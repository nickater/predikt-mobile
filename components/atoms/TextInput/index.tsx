import { FC } from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native'

import { BottomSheetTextInput } from '@gorhom/bottom-sheet'


type TextInputProps = RNTextInputProps & {
  bottomSheet?: boolean
}

export const TextInput: FC<TextInputProps> = ({ style, bottomSheet, ...rest }) => {

  if (bottomSheet) {
    return (
      <View style={styles.container}>
        <BottomSheetTextInput {...rest} style={[styles.textInput, style]} />
      </View>
    )
  }

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
