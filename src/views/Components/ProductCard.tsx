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

import { formatCurrency } from "../Services/formatCurrency";
import { useShoppingCart } from "../Contexts/ShoppingCartContext";

export interface IProductCard {
  product: IProduct;
}
//Nel componente ProductCard passo il prodotto di tipo IProduct (vedi riga 13) come props (vedi riga 16).
//In questo modo, passo il prodotto già pronto all'interno della ProductCard. Cioò la ProductCard è solo un componente
//che fa vedere il contenuto di un prodotto che già ho.
export default function ProductCard(props: IProductCard) {
  const { removeCartQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
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
          {formatCurrency(props.product.prodPrice)}
        </Typography>
      </CardContent>
      <CardContent style={{paddingBottom:"0"}}>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => increaseCartQuantity(props.product.prodID)}
          >
            Aggiungi al carrello
          </Button>
        </CardActions>
      </CardContent>
      <CardContent style={{paddingTop:"0"}}>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => removeCartQuantity(props.product.prodID)}
          >
            Remove
          </Button>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            onClick={() => decreaseCartQuantity(props.product.prodID)}
          >
            Decrease
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
