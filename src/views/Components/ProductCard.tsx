import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
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
  const {
    getItemQuantity,
    removeCartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(props.product.prodID);
  const theme = useTheme();
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
      <CardContent style={{ paddingBottom: "0" }}>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => increaseCartQuantity(props.product.prodID)}
          >
            Add
          </Button>
        </CardActions>
      </CardContent>
      <CardContent style={{ paddingTop: "0" }}>
        <CardActions>
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary.light }}
            fullWidth
            onClick={() => removeCartQuantity(props.product.prodID)}
          >
            Remove
          </Button>
          <Typography width={"20rem"}>Quantity: {quantity}</Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: theme.palette.primary.light }}
            onClick={() => decreaseCartQuantity(props.product.prodID)}
          >
            Decrease
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
