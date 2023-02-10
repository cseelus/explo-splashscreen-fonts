import { Text as RNText } from 'react-native'

export default function Text({ children, style }) {
  return (
    <RNText style={{ fontFamily: 'Inter_500Medium', ...style }}>
      {children}
    </RNText>
  )
}
