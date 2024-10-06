import { Button, SignIn, SignUp } from '@/components'
import { useState } from 'react'
import { View } from 'react-native'

export default () => {
  const [shouldShowRegistration, setShouldShowRegistration] = useState(false)

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        {shouldShowRegistration ? <SignUp /> : <SignIn />}
        <Button
          title={shouldShowRegistration ? 'Sign In' : 'Register'}
          onPress={() => setShouldShowRegistration(!shouldShowRegistration)}
        />
      </View>
    </View>
  )
}
