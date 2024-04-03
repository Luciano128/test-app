import { AppBar, Box, Toolbar } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { Maincontext } from "../Contexts/MainContext";
import { UserRoles } from "../Models/User";

export default function Navbar() {
  const context = useContext(Maincontext);

  return (
    <AppBar position="static">
      {/* Toolbar : mette tutto il menu su di una sola riga - disablegutter: elimina lo spazio tra gli elementi della barra*/}
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", md: "flex", gap: "16px" } }}
        >
          <Link to="/">E-Commerce</Link>
          {context.user.role === UserRoles.ADMINISTRATOR &&
            <Link to="/products">Gestione Prodotti</Link>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}
