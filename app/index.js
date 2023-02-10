import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { useTheme } from '@react-navigation/native'

export default function Home() {
  const theme = useTheme()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* When all loading is setup, unmount the splash screen component. */}
      <Stack.Screen options={{ title: 'Overview' }} />
      <Text style={{ color: theme.dark ? 'white' : 'black' }}>
        {JSON.stringify(theme, null, 2)}
      </Text>
    </View>
  )
}
