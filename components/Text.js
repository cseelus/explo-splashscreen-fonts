import { Text as RNText } from 'react-native'

export default function Text({ children, style }) {
  return (
    <RNText style={{ fontFamily: 'Inter_900Black', ...style }}>
      {children}
    </RNText>
  )
}
