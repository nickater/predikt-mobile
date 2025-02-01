import { useThemeColor } from '@/hooks'
import { Theme } from '@/libs/RNUILib'
import { Text as RNText, StyleSheet } from 'react-native'
import { TextProps } from './types'

export const Text: TextProps = ({
  variant,
  color,
  position,
  children,
  style,
  ...rest
}) => {
  const theme = useThemeColor()
  const styles = makeStyles(theme)

  return (
    <RNText
      {...rest}
      allowFontScaling={true}
      adjustsFontSizeToFit={true}
      ellipsizeMode="clip"
      maxFontSizeMultiplier={1}
      lineBreakMode="tail"
      style={[
        styles[variant ?? 'regular'],
        styles[position ?? 'left'],
        styles[color ?? 'primary'],
        {
          fontSize: 16,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  )
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    // colors
    primary: {
      color: theme.textPrimary,
    },
    secondary: {
      color: theme.textSecondary,
    },
    tertiary: {
      color: theme.primaryVariant,
    },
    error: {
      color: theme.error,
    },
    success: {
      color: theme.success,
    },
    // variants
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    bold: {
      fontFamily: 'Montserrat-Bold',
    },
    italic: {
      fontFamily: 'Montserrat-Italic',
    },
    light: {
      fontFamily: 'Montserrat-Light',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
    },
    semiBold: {
      fontFamily: 'Montserrat-SemiBold',
    },
    extraBold: {
      fontFamily: 'Montserrat-ExtraBold',
    },
    thin: {
      fontFamily: 'Montserrat-Thin',
    },
    underline: {
      fontFamily: 'Montserrat-Regular',
      textDecorationLine: 'underline',
    },
    strikethrough: {
      fontFamily: 'Montserrat-Regular',
      textDecorationLine: 'line-through',
    },
    uppercase: {
      fontFamily: 'Montserrat-Regular',
      textTransform: 'uppercase',
    },
    lowercase: {
      fontFamily: 'Montserrat-Regular',
      textTransform: 'lowercase',
    },
    header1: {
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 32,
    },
    header2: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 24,
    },
    header3: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 18,
    },
    // positions
    left: {
      textAlign: 'left',
    },
    center: {
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
  })
