import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MyDrawer from "./components/Drawer";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyDrawer />
    </ThemeProvider>
  );
}

export default App;
