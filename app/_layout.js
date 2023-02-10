import { SplashScreen } from 'expo-router'
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter'

import Text from '../components/Text'

export default function App() {
  // Load the font `Inter_500Medium`
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  })

  return (
    <>
      {/* When all loading is setup, unmount the splash screen component. */}
      {!fontsLoaded && <SplashScreen />}
      <Text style={{ marginTop: 200 }}>Test</Text>
    </>
  )
}
