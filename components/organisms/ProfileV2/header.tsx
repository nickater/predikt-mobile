import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

export const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity>
      <Icon name="arrow-left" size={24} color="#4B5563" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Profile Settings</Text>
    <View style={styles.headerSpacer} />
  </View>
)

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 50,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  headerSpacer: {
    width: 24,
  },
})
