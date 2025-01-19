import { Text } from '@/components'
import { useAdjustColor, useAuth, useThemeColor } from '@/hooks'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { Redirect, Tabs } from 'expo-router'

export default function TabsLayout() {
  const { session, loading } = useAuth()
  const theme = useThemeColor()
  const selectedButtonColor = useAdjustColor(theme.accent, 120)

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (!session) {
    return <Redirect href="/auth" />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: theme.accent,
        tabBarActiveTintColor: selectedButtonColor,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        sceneStyle: {
          backgroundColor: 'red',
        },
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 0,
          paddingTop: 8,
          minHeight: 64,
        },
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
