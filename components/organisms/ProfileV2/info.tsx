import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

export const ProfileInfo = () => (
  <View style={styles.profileSection}>
    <View style={styles.profileInfo}>
      <Image
        source={{
          uri: 'https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123',
        }}
        style={styles.profileImage}
      />
      <TouchableOpacity style={styles.cameraButton}>
        <Icon name="camera" size={16} color="#FFFFFF" />
      </TouchableOpacity>
      <View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileUsername}>@johndoe</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  profileSection: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    marginRight: 16,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#374151',
    padding: 4,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  profileUsername: {
    fontSize: 14,
    color: '#6B7280',
  },
})
