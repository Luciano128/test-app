import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import Navbar from "./views/Components/Navbar";
import MainRoutes from "./views/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./views/Contexts/MainContext";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
      light: purple[200],
    },
    secondary: {
      main: grey[800],
      light: grey[200],
    },
  },
});

function App() {
  return (
    <MainProvider>
      {/* BrowserRouter va messo altrimenti non funziona il componente MainRoute che sta all'interno */}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <MainRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
