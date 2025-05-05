import { ThemeProvider } from '@mui/material/styles';
import Calculator from './components/Calculator';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
