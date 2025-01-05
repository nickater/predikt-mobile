import { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type LoadingBasicTextProps = {
  altText?: string
}
export const LoadingBasicText: FC<LoadingBasicTextProps> = ({ altText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{altText || 'Loading...'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
})
