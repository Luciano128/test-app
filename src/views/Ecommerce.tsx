import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IProduct } from "./Models/Product";
import ProductServices from "./Services/ProductServices";
import ProductCard from "./Components/ProductCard";

export default function Ecommerce() {
  const [itemList, setItemList] = useState<IProduct[]>([]);

  const SVC = new ProductServices();

  useEffect(() => {
    GetList();
  }, []);

  const GetList = () => {
    const list: IProduct[] = SVC.GetProductList();
    setItemList(list);
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        E-commerce
      </Typography>
      <Grid container spacing={2}>
        {itemList.map((item) => (
          <Grid item xs={12} md={4}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
