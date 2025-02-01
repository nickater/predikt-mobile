// TODO: Abstract the logic for toggling between sign in and sign up into a hook
// TODO: Move the UI into a separate component

import { Logo, Tabs, Text, TextInput } from '@/components'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Logo Section Component */}
        <Logo />
        {/* Tabs Component */}
        <Tabs />
        {/* Form Component */}
        <View style={styles.form}>
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
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        {/* Divider Component */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <View style={styles.dividerTextContainer}>
            <Text style={styles.dividerText}>Or continue with</Text>
          </View>
        </View>
        {/* Social Auth Component */}
        <View style={styles.socialAuth}>
          <TouchableOpacity style={styles.socialButton}>
            {/* Replace with appropriate icon */}
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            {/* Replace with appropriate icon */}
            <Text style={styles.socialIcon}>GH</Text>
            <Text style={styles.socialButtonText}>Continue with GitHub</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  form: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  input: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginTop: 4,
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#111827',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#FFFFFF',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  dividerTextContainer: {
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  dividerText: {
    color: '#6B7280',
    fontSize: 14,
  },
  socialAuth: {
    marginBottom: 24,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginBottom: 12,
  },
  socialIcon: {
    color: '#374151',
    marginRight: 8,
  },
  socialButtonText: {
    color: '#374151',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#111827',
    textDecorationLine: 'underline',
  },
})

export default AuthScreen
