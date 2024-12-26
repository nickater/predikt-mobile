import { Text } from '@/components'
import { useAuth } from '@/hooks/auth'
import { useThemeColor } from '@/hooks/useThemeColor'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { Redirect, Tabs } from 'expo-router'

export default function TabsLayout() {
  const { session, loading } = useAuth()
  const { tabIconDefault, tabIconSelected } = useThemeColor()

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (!session) {
    return <Redirect href="/auth" />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: tabIconDefault,
        tabBarActiveTintColor: tabIconSelected,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(question)"
        options={{
          title: 'Questions',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="question" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(prediction)"
        options={{
          title: 'Predictions',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="crystal-ball"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
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
