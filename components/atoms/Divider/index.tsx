import { useThemeColor } from '@/hooks'
import { StyleSheet, View } from 'react-native'

export const Divider = () => {
  const theme = useThemeColor()
  const colorStyle = { borderBottomColor: theme.primary }
  return <View style={[styles.container, colorStyle]} />
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
  },
})
