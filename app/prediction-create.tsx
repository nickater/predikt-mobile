import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

const PredictionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-left" size={20} color="#4B5563" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Make Prediction</Text>
        <View style={styles.headerSpacer} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <View style={styles.questionHeader}>
            <Image
              source={{
                uri: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.questionText}>
                Will AI surpass human intelligence by 2030?
              </Text>
              <View style={styles.questionInfo}>
                <Text style={styles.infoText}>Posted by @techfuturist</Text>
                <Text style={styles.infoText}>•</Text>
                <Text style={styles.infoText}>Ends in 5 days</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Your Prediction</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Share your prediction..."
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Confidence Level</Text>
          <View style={styles.confidenceButtons}>
            <TouchableOpacity style={styles.confidenceButton}>
              <Text style={styles.confidenceButtonText}>Low</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confidenceButton}>
              <Text style={styles.confidenceButtonText}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confidenceButton}>
              <Text style={styles.confidenceButtonText}>High</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Supporting Reasoning (Optional)</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Explain your reasoning..."
            multiline
            numberOfLines={3}
          />
        </View>
        <View style={styles.submitSection}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit Prediction</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
    zIndex: 50,
  },
  iconButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  questionText: {
    fontWeight: '600',
    color: '#111827',
  },
  questionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#6B7280',
    marginHorizontal: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF',
  },
  confidenceButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  confidenceButton: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    alignItems: 'center',
  },
  confidenceButtonText: {
    fontSize: 14,
    color: '#374151',
  },
  submitSection: {
    paddingVertical: 16,
  },
  submitButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
})

export default PredictionScreen
