import { Card, Text } from '@/components/atoms'
import { Image, StyleSheet, View } from 'react-native'

export const ProfileSection = () => (
  <View>
    <View style={styles.profileInfo}>
      <Image
        source={{
          uri: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
        }}
        style={styles.profileImage}
      />
      <View style={styles.profileText}>
        <Text>Sarah Anderson</Text>
        <Text variant="light">@sarahanderson</Text>
      </View>
    </View>
    <Card style={styles.profileStats}>
      <View style={styles.statItem}>
        <Text>156</Text>
        <Text variant="thin">Predictions</Text>
      </View>
      <View style={styles.statItem}>
        <Text>89%</Text>
        <Text variant="thin">Accuracy</Text>
      </View>
    </Card>
  </View>
)

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileText: {
    flex: 1,
    gap: 8,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0d1321',
  },
  profileUsername: {
    fontSize: 14,
    // color: '#3e5c76',
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 8,
  },
  statItem: {
    alignItems: 'center',
  },
})
