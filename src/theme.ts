import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#f39c12' }, // 연산자 버튼
    secondary: { main: '#27ae60' }, // 등호 버튼
    info: { main: '#f1c40f' }, // C 버튼
    background: { default: '#ecf0f1' }, // 배경색
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
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#bdc3c7',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            height: '60px',
            fontSize: '24px',
            backgroundColor: '#fff',
            borderRadius: '5px',
          },
        },
      },
    },
  },
});

export default theme;
