import { FC, PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native-ui-lib'
import { CustomSafeAreaViewProps } from './types'

export const CustomSafeAreaView: FC<
  PropsWithChildren<CustomSafeAreaViewProps>
> = ({ children, style, horizontal, bottom = true, top = true }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        style,
        horizontal && styles.horizontal,
        { paddingBottom: bottom ? insets.bottom : 0 },
        { paddingTop: top ? insets.top : 0 },
      ]}
    >
      {children}
    </View>
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
