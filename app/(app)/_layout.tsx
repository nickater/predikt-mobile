import { Text } from '@/components'
import { useAuth } from '@/hooks/auth'
import { Redirect, Tabs } from 'expo-router'

export default () => {
  const { session, loading } = useAuth()
  if (loading) {
    return <Text>Loading...</Text>
  }

  if (!session) {
    return <Redirect href="/auth" />
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Tabs.Screen
        name="question"
        options={{
          title: 'Question',
        }}
      />
      <Tabs.Screen
        name="prediction"
        options={{
          title: 'Account',
        }}
      />
    </Tabs>
  )
}
