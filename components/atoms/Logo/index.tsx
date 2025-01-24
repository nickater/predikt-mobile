import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../Text'

type LogoProps = {}

export const Logo: FC<LogoProps> = () => {
  return (
    <View style={styles.logoSection}>
      <View style={styles.iconContainer}>
        {/* Replace this with an appropriate icon component */}
        <Text style={styles.icon}>🔮</Text>
      </View>
      <Text style={styles.title}>Predikt</Text>
      <Text style={styles.subtitle}>Make predictions, track outcomes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 32,
    color: '#374151',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 8,
  },
})
