import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Handle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.handle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#ccc',
  },
})
