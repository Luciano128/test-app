import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "../Contexts/ShoppingCartContext";

export default function CartBadge() {
    const {cartQuantity}  = useShoppingCart();
  return (
    
    <Badge color="secondary" badgeContent={cartQuantity}>
      <ShoppingCartIcon />
    </Badge>
  );
}
