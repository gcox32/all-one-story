import { createTheme } from '@mui/material/styles';

export function createMyTheme() {
  return createTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      background: {
        default: '#fff',
      },
    },
    // You can customize other theme aspects here
  });
}