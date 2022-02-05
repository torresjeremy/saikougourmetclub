import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  colors: {
    yellow: {
      50: '#F8F8EC',
      100: '#ECEBCA',
      150: '#F1EBDB',
      200: '#E0DEA8',
      300: '#D4D186',
      400: '#C8C464',
      500: '#BCB743',
      600: '#979235',
      700: '#716E28',
      800: '#4B491B',
      900: '#26250D',
    },
    red: {
      50: '#FDE7E9',
      100: '#FBBCC1',
      150: '#CC3333',
      200: '#F89199',
      300: '#F56671',
      400: '#F23B49',
      500: '#EF1021',
      600: '#BF0D1A',
      700: '#900914',
      800: '#60060D',
      900: '#300307',
    },
  },
});

export default Theme;
