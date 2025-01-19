import { useAdjustColor, useThemeColor } from '@/hooks'
import { FC } from 'react'
import ButtonBase from 'react-native-ui-lib/button'
import { ButtonProps } from './types'

const mapFontSize = {
  small: 12,
  medium: 16,
  large: 20,
}

export const PrimaryButton: FC<ButtonProps> = ({
  size = 'large',
  fontSize = 'medium',
  ...props
}) => {
  const theme = useThemeColor()
  const pressedColor = useAdjustColor(theme.background, 0.5)

  return (
    <ButtonBase
      size={size}
      {...props}
      text50
      color={theme.textPrimary}
      labelStyle={{ fontSize: mapFontSize[fontSize] }}
      backgroundColor={theme.background}
      activeBackgroundColor={pressedColor}
    />
  )
}
