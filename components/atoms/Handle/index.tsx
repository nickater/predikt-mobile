import { useThemeColor } from '@/hooks'
import { Theme } from '@/libs/RNUILib'
import { View, StyleSheet } from 'react-native'

export const Handle = () => {
  const theme = useThemeColor()
  const styles = makeStyle(theme)

  return (
    <View style={styles.container}>
      <View style={styles.handle} />
    </View>
  )
}

const makeStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      backgroundColor: theme.background,
    },
    handle: {
      width: 40,
      height: 5,
      borderRadius: 2.5,
      backgroundColor: '#ccc',
    },
  })
