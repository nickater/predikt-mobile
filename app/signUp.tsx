import React from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome' // Ensure this package is installed
import { Text, TextInput } from '@/components'
import { Checkbox } from 'react-native-ui-lib'

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#4B5563" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.logoSection}>
          <Icon name="amazon" size={60} color="#374151" />
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join the prediction community</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="Choose a username" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Create a password"
                secureTextEntry
              />
              <TouchableOpacity style={styles.eyeButton}>
                <Icon name="eye" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox value={false} />
            <Text style={styles.checkboxText}>
              I agree to the{' '}
              <Text style={styles.linkText}>Terms of Service</Text> and{' '}
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Or sign up with</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.socialAuth}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={20} color="#374151" />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="apple" size={20} color="#374151" />
            <Text style={styles.socialButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.signInText}>Sign In</Text>
        </Text>
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
  content: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  form: {
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkboxText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  linkText: {
    color: '#111827',
  },
  createAccountButton: {
    marginTop: 24,
    backgroundColor: '#111827',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#6B7280',
  },
  socialAuth: {
    marginBottom: 32,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  socialButtonText: {
    marginLeft: 8,
    color: '#374151',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6B7280',
  },
  signInText: {
    color: '#111827',
    fontWeight: '500',
  },
})

export default SignupScreen
