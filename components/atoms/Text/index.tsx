import { useThemeColor } from '@/hooks'
import { Theme } from '@/libs/RNUILib'
import { FC } from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { TextProps } from './types'

export const Text: TextProps = ({ variant, position, children, ...props }) => {
  const theme = useThemeColor()
  const styles = makeStyles(theme)

  return (
    <RNText
      {...props}
      allowFontScaling={true}
      adjustsFontSizeToFit={true}
      ellipsizeMode="clip"
      maxFontSizeMultiplier={1}
      lineBreakMode="tail"
      style={[
        styles[variant ?? 'paragraph'],
        styles[position ?? 'left'],
        props.style,
      ]}
    >
      {children}
    </RNText>
  )
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    header1: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.textPrimary,
    },
    header2: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    paragraph: {
      fontSize: 16,
      color: theme.textPrimary,
      lineHeight: 24,
    },
    caption: {
      fontSize: 12,
      color: '#999999',
    },
    link: {
      fontSize: 16,
      color: '#007bff',
      textDecorationLine: 'underline',
    },
    highlighted: {
      fontSize: 16,
      color: '#ff5722',
      backgroundColor: '#ffffe0',
    },
    bold: {
      fontSize: 16,
      color: theme.textPrimary,
      fontWeight: 'bold',
    },
    bold2: {
      fontSize: 20,
      color: theme.textPrimary,
      fontWeight: 'bold',
    },
    italic: {
      fontSize: 16,
      color: theme.textPrimary,
      fontStyle: 'italic',
    },
    small: {
      fontSize: 14,
    },
    large: {
      fontSize: 20,
    },
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
