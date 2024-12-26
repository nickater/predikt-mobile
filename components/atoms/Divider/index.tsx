import { useThemeColor } from '@/hooks/useThemeColor'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

export const Divider = () => {
  const theme = useThemeColor()
  const colorStyle = { borderBottomColor: theme.icon }
  return <View style={[styles.container, colorStyle]} />
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
  },
})
