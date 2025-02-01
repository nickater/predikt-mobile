import { useAdjustColor, useThemeColor } from '@/hooks'
import { FC } from 'react'
import ButtonBase from 'react-native-ui-lib/button'
import { ButtonProps } from './types'

const mapFontSize = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
}

export const PrimaryButton: FC<ButtonProps> = ({
  size = 'large',
  fontSize = 'medium',
  ...props
}) => {
  const theme = useThemeColor()
  const pressedColor = useAdjustColor(theme.textSecondary, 0.5)

  return (
    <ButtonBase
      size={size}
      {...props}
      text50
      borderRadius={8}
      color={theme.background}
      labelStyle={{ fontSize: mapFontSize[fontSize] }}
      backgroundColor={theme.textSecondary}
      activeBackgroundColor={pressedColor}
    />
  )
}
