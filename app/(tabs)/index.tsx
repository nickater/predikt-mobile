import { CreateQuestion, CustomSafeAreaView, ViewQuestion } from '@/components'
import React from 'react'

export default () => {
  return (
    <CustomSafeAreaView style={{ justifyContent: 'space-between' }}>
      <ViewQuestion />
      <CreateQuestion />
    </CustomSafeAreaView>
  )
}
