import React, { FC, PropsWithChildren } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

export const CustomSafeAreaView: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.safeArea]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Default background color, you can change it or make it configurable
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
})
