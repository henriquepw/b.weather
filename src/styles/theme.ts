import { extendTheme } from 'native-base';

export default extendTheme({
  fontConfig: {
    Lato: {
      100: {
        normal: 'Lato_400Regular',
      },
      200: {
        normal: 'Lato_400Regular',
      },
      300: {
        normal: 'Lato_400Regular',
      },
      400: {
        normal: 'Lato_400Regular',
      },
      500: {
        normal: 'Lato_700Bold',
      },
      600: {
        normal: 'Lato_700Bold',
      },
      700: {
        normal: 'Lato_700Bold',
      },
    },
  },
  fonts: {
    heading: 'Lato',
    body: 'Lato',
    mono: 'Lato',
  },
  colors: {
    gray: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      200: '#E4E4E7',
      300: '#D4D4D8',
      400: '#A1A1AA',
      500: '#71717A',
      600: '#52525B',
      700: '#3F3F46',
      800: '#27272A',
      900: '#121212',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});
