import { FC, PropsWithChildren } from 'react'
import { StyleSheet, Text as RNText, TextProps } from 'react-native'

type TextVariant =
  | 'header1'
  | 'header2'
  | 'paragraph'
  | 'caption'
  | 'link'
  | 'highlighted'
  | 'bold'
  | 'italic'
  | 'small'
  | 'large'

type Position = 'left' | 'center' | 'right'

export const Text: FC<
  PropsWithChildren<TextProps & { variant?: TextVariant; position?: Position }>
> = ({ variant, position, children, ...props }) => {
  return (
    <RNText
      {...props}
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

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
  },
  header2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4a4a4a',
  },
  paragraph: {
    fontSize: 16,
    color: '#666666',
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
    fontWeight: 'bold',
  },
  italic: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  small: {
    fontSize: 14,
    color: '#555555',
  },
  large: {
    fontSize: 20,
    color: '#333333',
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
