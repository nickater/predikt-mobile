import { FC, PropsWithChildren } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

type CustomSafeAreaViewProps = SafeAreaViewProps & {
  horizontal?: boolean
}
export const CustomSafeAreaView: FC<
  PropsWithChildren<CustomSafeAreaViewProps>
> = ({ children, style, horizontal }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style, horizontal && styles.horizontal]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  horizontal: {
    paddingHorizontal: 20,
  },
})
