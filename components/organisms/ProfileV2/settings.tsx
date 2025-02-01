import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Text } from '@/components/atoms'
import { Chevron } from '@/components/atoms/Icon/Chevron'
import { Bell, Moon } from '@/components/atoms/Icon'
import { Switch } from 'react-native-ui-lib'
import { useBottomSheet } from '@/hooks/useBottomSheet'
import { UpdatePassword, UpdateUsername } from '@/components/molecules'
import { useCallback, useMemo } from 'react'

export const SettingsSection = () => {
  const { expand, collapse } = useBottomSheet()

  const showUpdateUsername = useCallback(() => {
    expand({
      snapPoints: ['40%'],
      children: <UpdateUsername onSubmit={() => collapse()} />,
    })
  }, [expand, collapse])

  const showUpdatePassword = useCallback(() => {
    expand({
      snapPoints: ['40%'],
      children: <UpdatePassword onSubmit={() => collapse()} />,
    })
  }, [expand, collapse])

  return (
    <Card style={styles.settingsSection}>
      <View style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Moon size={20} color="#3e5c76" style={{ minWidth: 20 }} />
          <Text style={styles.settingLabel}>Dark Mode</Text>
        </View>
        <Switch />
      </View>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Bell size={20} color="#3e5c76" style={{ minWidth: 20 }} />
          <Text style={styles.settingLabel}>Notifications</Text>
        </View>
        <Chevron direction="right" color="#3e5c76" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <FontAwesome
            name="lock"
            size={20}
            color="#3e5c76"
            style={{ minWidth: 20 }}
          />
          <Text style={styles.settingLabel}>Privacy</Text>
        </View>
        <Chevron direction="right" color="#3e5c76" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={showUpdateUsername}>
        <View style={styles.settingInfo}>
          <FontAwesome
            name="user"
            size={20}
            color="#3e5c76"
            style={{ minWidth: 20 }}
          />
          <Text style={styles.settingLabel}>Update Username</Text>
        </View>
        <Chevron direction="right" color="#3e5c76" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={showUpdatePassword}>
        <View style={styles.settingInfo}>
          <FontAwesome
            name="lock"
            size={20}
            color="#3e5c76"
            style={{ minWidth: 20 }}
          />
          <Text style={styles.settingLabel}>Update Password</Text>
        </View>
        <Chevron direction="right" color="#3e5c76" />
      </TouchableOpacity>
    </Card>
  )
}

const styles = StyleSheet.create({
  settingsSection: {
    padding: 16,
    borderRadius: 8,
    gap: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    marginLeft: 12,
    fontSize: 16,
  },
  icon: {
    minWidth: 20,
    color: '#3e5c76',
  },
})
