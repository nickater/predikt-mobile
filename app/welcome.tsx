import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.iconContainer}>
          {/* Replace this with an appropriate icon component */}
          <Text style={styles.icon}>🔮</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Predikt</Text>
          <Text style={styles.description}>
            Make predictions, track outcomes, and engage with a community of
            forecasters
          </Text>
        </View>
        <View style={styles.dotsContainer}>
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signInLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    justifyContent: 'space-between',
  },
  skipContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 16,
  },
  skipText: {
    color: '#6B7280',
    fontSize: 14,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -80,
  },
  iconContainer: {
    width: 128,
    height: 128,
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  description: {
    color: '#4B5563',
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 280,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 32,
  },
  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: '#111827',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    backgroundColor: '#D1D5DB',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  footer: {
    width: '100%',
    marginBottom: 32,
  },
  getStartedButton: {
    width: '100%',
    backgroundColor: '#111827',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  getStartedText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signInText: {
    color: '#4B5563',
  },
  signInLink: {
    color: '#111827',
    fontWeight: '600',
    marginLeft: 4,
  },
})

export default WelcomeScreen
