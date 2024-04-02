import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      {/* Toolbar : mette tutto il menu su di una sola riga - disablegutter: elimina lo spazio tra gli elementi della barra*/}
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex", gap:"16px" }}}>
          <Link to="/">E-Commerce</Link>
          <Link to="/products">Gestione Prodotti</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
