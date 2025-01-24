import { Text } from '@/components/atoms'
import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-ui-lib'

type TabsProps = {}

export const Tabs: FC<TabsProps> = () => {
  return (
    <View style={styles.tabs}>
      <TouchableOpacity style={styles.activeTab}>
        <Text style={styles.activeTabText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inactiveTab}>
        <Text style={styles.inactiveTabText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 24,
  },
  activeTab: {
    flex: 1,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderColor: '#111827',
  },
  activeTabText: {
    textAlign: 'center',
    color: '#111827',
    fontWeight: '500',
  },
  inactiveTab: {
    flex: 1,
    paddingVertical: 8,
  },
  inactiveTabText: {
    textAlign: 'center',
    color: '#6B7280',
  },
})
