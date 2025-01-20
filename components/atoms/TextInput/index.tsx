import { FC } from 'react'
import { StyleSheet, TextInput as RNTextInput, View } from 'react-native'

import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { useThemeColor } from '@/hooks'
import { TextInputProps } from './types'

export const TextInput: FC<TextInputProps> = ({
  style,
  bottomSheet,
  ...rest
}) => {
  const theme = useThemeColor()

  const textInputProps = {
    placeholderTextColor: theme.secondary,
    style: [
      styles.textInput,
      style,
      {
        color: theme.secondary,
        backgroundColor: 'white',
        fontSize: 20,
      },
    ],
  }

  if (bottomSheet) {
    return (
      <View style={[styles.container]}>
        <BottomSheetTextInput {...rest} {...textInputProps} />
      </View>
    )
  }

  return (
    <View style={[styles.container]}>
      <RNTextInput {...rest} {...textInputProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  textInput: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
})
