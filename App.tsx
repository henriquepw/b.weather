import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Box flex="1" alignItems="center" justifyContent="center">Hello World</Box>
    </NativeBaseProvider>
  );
}