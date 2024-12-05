import { Text } from '@/components'
import { useAuth } from '@/hooks/auth'
import { FontAwesome } from '@expo/vector-icons'
import { Redirect, Tabs } from 'expo-router'

export default function TabsLayout() {
  const { session, loading, signOut } = useAuth()

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (!session?.user) {
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
        name="questions"
        options={{
          title: 'Questions',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
