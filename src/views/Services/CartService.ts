import { IProduct } from "../Models/Product";

export default class CartServices {
  AddToCart(product: IProduct) {
    const list: IProduct[] = this.GetCartList();
    const newID: number = Math.max(...list.map((o) => o.prodID), 0) + 1;
    product.prodID = newID;
    list.push(product);
    this.UpdateCartList(list);
  }
  GetCartList() {
    const list: string = localStorage.getItem("cartproducts") ?? "";
    return list === "" ? [] : JSON.parse(list);
  }

  UpdateCartList = (list: IProduct[]) => {
    localStorage.setItem("cartproducts", JSON.stringify(list));
  };

  EmptyCart() {
    localStorage.removeItem("cartproducts");
  }
}
