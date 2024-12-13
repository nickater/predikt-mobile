import { CustomSafeAreaView } from '@/components'
import HomeFeed from '@/components/organisms/HomeFeed'
import React from 'react'

export default function Home() {
  return (
    <CustomSafeAreaView style={{ justifyContent: 'space-between' }}>
      <HomeFeed />
    </CustomSafeAreaView>
  )
}
