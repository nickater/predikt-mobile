import { CreateQuestion, CustomSafeAreaView } from '@/components'
import React from 'react'
import { View } from 'react-native'

export default function Create() {
  return (
    <CustomSafeAreaView style={{ justifyContent: 'space-between' }}>
      <View />
      <CreateQuestion />
    </CustomSafeAreaView>
  )
}
