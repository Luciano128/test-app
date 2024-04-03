import { Button, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { IProduct } from "./Models/Product";
import ProductServices from "./Services/ProductServices";
import ProductCard from "./Components/ProductCard";
import { Maincontext } from "./Contexts/MainContext";
import LoginForm from "./Components/LoginForm";
import { DefUser } from "./Models/User";

export default function Ecommerce() {
  const [itemList, setItemList] = useState<IProduct[]>([]);
  const [login, setLogin] = useState<boolean>(false);

  //questo componente Ecommerce richiama il sevizio SVC che è come al solito quello che ci fornisce i dati.
  const SVC = new ProductServices();

  const context = useContext(Maincontext);


///riga 21-23 : vuol dire che all'apertura del componente Ecommerce si apre la Lista e la mette in setItemList (riga27)
  useEffect(() => {
    GetList();
  }, []);

  const GetList = () => {
    const list: IProduct[] = SVC.GetProductList();
    setItemList(list);
  };

  const onLogout = () => {
    context.setContext({ ...context, user: DefUser });
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        E-commerce
      </Typography>
      <Typography variant="h6" gutterBottom>
        {context.user.userName === ""
          ? ""
          : `${context.user.firstName} ${context.user.lastName}`}
      </Typography>
      {context.user.userName === "" ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setLogin(!login)}
        >
          Login
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={() => onLogout()}>
          Logout
        </Button>
      )}
      {/* In questo punto il componente Ecommerce fa una griglia e dentro ogni quadrato della griglia ci mette una
      card del prodotto ProductCard passandogli il prodotto*/}
      <Grid container spacing={2}>
        {itemList.map((item) => (
          <Grid item xs={12} md={4}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
      <LoginForm open={login} onClose={() => setLogin(false)} />
    </>
  );
}
