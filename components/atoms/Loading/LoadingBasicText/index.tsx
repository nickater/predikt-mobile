import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-ui-lib'
import { Text } from '../../Text'

type LoadingBasicTextProps = {
  altText?: string
}
export const LoadingBasicText: FC<LoadingBasicTextProps> = ({ altText }) => {
  return (
    <View style={styles.container}>
      <Text variant="header1">{altText || 'Loading...'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
