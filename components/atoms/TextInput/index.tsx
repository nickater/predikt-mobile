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
    placeholderTextColor: theme.textSecondary,
    style: [
      styles.textInput,
      style,
      {
        // color: theme.secondary,
        // backgroundColor: 'white',
        fontSize: 16,
      },
    ],
  }

  if (bottomSheet) {
    return <BottomSheetTextInput {...rest} {...textInputProps} />
  }

  return <RNTextInput {...rest} {...textInputProps} />
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: 'white',
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
})
