import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { IProduct } from "../Models/Product";
import CartServices from "../Services/CartService";

export interface IProductCard {
  product: IProduct;
}
//Nel componente ProductCard passo il prodotto di tipo IProduct (vedi riga 13) come props (vedi riga 16).
//In questo modo, passo il prodotto già pronto all'interno della ProductCard. Cioò la ProductCard è solo un componente
//che fa vedere il contenuto di un prodotto che già ho.
export default function ProductCard(props: IProductCard) {
  
  const SVC = new CartServices();
  const handleClick = () => {
    SVC.AddToCart(props.product);
  };

  return (
    <Card variant="outlined">
      <CardHeader title={props.product.prodName} />
      <CardMedia
        component="img"
        height="240"
        image={props.product.prodImageUrl}
        alt={props.product.prodName}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.product.prodDescription}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.product.prodPrice}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClick}
        >
          Aggiungi al carrello
        </Button>
      </CardActions>
    </Card>
  );
}

