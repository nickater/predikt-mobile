import { useNavigation } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import { Text } from '../Text'

const GoBackButton = () => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text onPress={handleGoBack}>Back</Text>
    </View>
  )
}

export default GoBackButton

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
})
