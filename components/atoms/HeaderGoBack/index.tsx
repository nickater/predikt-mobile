import { useNavigation } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'

const GoBackButton = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.goBack()
        }}
      >
        Back
      </Text>
    </View>
  )
}

export default GoBackButton

const styles = StyleSheet.create({
  container: {},
})
