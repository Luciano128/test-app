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

export interface IProductCard {
  product: IProduct;
}

export default function ProductCard(props: IProductCard) {
  return (
    <Card>
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
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" fullWidth>Aggiungi al carrello</Button>
      </CardActions>
    </Card>
  );
}
