import { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'

export const useSplashScreen = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true)

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync()
      setIsSplashScreenVisible(false)
    }

    hideSplashScreen()
  }, [])

  return isSplashScreenVisible
}
