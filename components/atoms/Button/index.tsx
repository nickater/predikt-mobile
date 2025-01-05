import { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import ButtonBase from 'react-native-ui-lib/button'

import { PrimaryButton } from './primary.button'

import { Text } from '../Text'

// type ButtonProps = {
//   title: string
//   onPress: () => void
//   type?: 'primary' | 'secondary' | 'ghost' | 'link' | 'disabled'
//   disabled?: boolean
// }
// export const Button: FC<ButtonProps> = ({
//   title,
//   onPress,
//   type = 'primary',
//   disabled = false,
// }) => {
//   const getButtonStyle = () => {
//     if (disabled) {
//       return buttonStyles.disabledButton
//     }

//     switch (type) {
//       case 'primary':
//         return buttonStyles.primaryButton
//       case 'secondary':
//         return buttonStyles.secondaryButton
//       case 'ghost':
//         return buttonStyles.ghostButton
//       case 'link':
//         return buttonStyles.linkButton
//       case 'disabled':
//         return buttonStyles.disabledButton
//       default:
//         return buttonStyles.primaryButton
//     }
//   }

//   const getButtonTextStyle = () => {
//     if (disabled) {
//       return buttonStyles.disabledButtonText
//     }

//     switch (type) {
//       case 'primary':
//         return buttonStyles.primaryButtonText
//       case 'secondary':
//         return buttonStyles.secondaryButtonText
//       case 'ghost':
//         return buttonStyles.ghostButtonText
//       case 'link':
//         return buttonStyles.linkButtonText
//       case 'disabled':
//         return buttonStyles.disabledButtonText
//       default:
//         return buttonStyles.primaryButtonText
//     }
//   }

//   return (
//     <ButtonBase
//       label={title}
//       onPress={onPress}
//       disabled={disabled}
//       // style={[buttonStyles.button, getButtonStyle()]}
//       labelStyle={getButtonTextStyle()}
//     />
//   )
// }

// const buttonStyles = StyleSheet.create({
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 10,
//   },
//   primaryButton: {
//     backgroundColor: '#007bff',
//   },
//   primaryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   secondaryButton: {
//     backgroundColor: '#6c757d',
//   },
//   secondaryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   ghostButton: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#007bff',
//   },
//   ghostButtonText: {
//     color: '#007bff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   linkButton: {
//     backgroundColor: 'transparent',
//   },
//   linkButtonText: {
//     color: '#007bff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   disabledButton: {
//     backgroundColor: '#d6d6d6',
//   },
//   disabledButtonText: {
//     color: '#9e9e9e',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// })

export const Button = {
  Primary: PrimaryButton,
}
