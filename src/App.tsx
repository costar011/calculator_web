import { ThemeProvider } from "@mui/material/styles";
import Calculator from "./components/Calculator";
import theme from "./theme";
import Test from "./components/test";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
