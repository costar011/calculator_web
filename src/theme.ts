import { createTheme, ThemeOptions } from '@mui/material/styles';

// palette 확장을 위한 타입 정의
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      gray: string; // 사용자 정의 회색
    };
  }
  interface PaletteOptions {
    custom?: {
      gray?: string; // 사용자 정의 회색 옵션
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: { main: '#f39c12' }, // 연산자 버튼 (주황색)
    secondary: { main: '#27ae60' }, // 등호 버튼 (초록색)
    info: { main: '#f1c40f' }, // C 버튼 (노란색)
    background: { default: '#ecf0f1' }, // 배경색
    text: { primary: '#000' }, // 텍스트 색상
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // 기본 폰트
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          margin: '5px',
          color: '#fff',
          fontSize: '18px',
          // 기본적으로 회색 (숫자 버튼, 괄호 버튼 등)
          backgroundColor:
            ownerState.color === 'primary'
              ? '#f39c12' // 연산자 버튼
              : ownerState.color === 'secondary'
              ? '#27ae60' // 등호 버튼
              : ownerState.color === 'info'
              ? '#f1c40f' // C 버튼
              : '#bdc3c7', // 기본 회색
          '&:hover': {
            backgroundColor:
              ownerState.color === 'primary'
                ? '#e67e22'
                : ownerState.color === 'secondary'
                ? '#2ecc71'
                : ownerState.color === 'info'
                ? '#f4d03f'
                : '#bdc3c7',
          },
        }),
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
};

const theme = createTheme(themeOptions);

export default theme;
