import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/atoms/Text'
import { LoadingBasicTextProps } from './types'

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
