import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import Navbar from "./views/Components/Navbar";
import MainRoutes from "./views/MainRoutes";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: grey[800],
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
