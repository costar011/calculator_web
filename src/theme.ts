import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#f1a33c' }, // 연산자 버튼 색상
    secondary: { main: '#a32f9b' }, // 등호 버튼 색상
    info: { main: '#1e90ff' }, // C 버튼 색상
    text: { primary: '#000' }, // 텍스트 색상
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          margin: '5px',
          color: '#fff',
          fontSize: '18px',
          backgroundColor: '#333',
          '&:hover': {
            backgroundColor: '#555',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
});

export default theme;
