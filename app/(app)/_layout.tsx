import { Text } from '@/components'
import { useAuth } from '@/hooks/auth'
import { FontAwesome } from '@expo/vector-icons'
import { Redirect, Tabs } from 'expo-router'

export default function TabsLayout() {
  const { session, loading } = useAuth()

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (!session) {
    return <Redirect href="/auth" />
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myPredictions"
        options={{
          title: 'My Predictions',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="question" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
