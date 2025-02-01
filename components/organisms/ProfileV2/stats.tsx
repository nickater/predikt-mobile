import { View, Text, StyleSheet } from 'react-native'

export const ProfileStats = () => (
  <View style={styles.profileStats}>
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>Total Predictions</Text>
      <Text style={styles.statValue}>247</Text>
    </View>
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>Accuracy Rate</Text>
      <Text style={styles.statValue}>84%</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  profileStats: {
    marginTop: 16,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
})
