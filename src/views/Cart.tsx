import { useEffect, useState } from "react";
import { IProduct } from "./Models/Product";
import CartServices from "./Services/CartService";
import { Maincontext } from "./Contexts/MainContext";

export default function Cart() {

  const [itemList, setItemList] = useState<IProduct[]>([]);

  const SVC = new CartServices();

  useEffect(() => {
    GetCartList();
  }, []);


  const GetCartList = () => {
    const list: IProduct[] = SVC.GetCartList();
    setItemList(list);
  };

  const handleClick = () => {
    SVC.EmptyCart();
    setItemList([]);

  };

  return (
    <div>
      <table style={{ width: "100%", padding: "64px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrizione</th>
            <th>Prezzo</th>
            <th>Immagine</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, index) => (
            <tr key={index}>
              <td>{item.prodID}</td>
              <td>{item.prodName}</td>
              <td>{item.prodDescription}</td>
              <td>{item.prodPrice}</td>
              <td>
                <img src={item.prodImageUrl} alt={item.prodName} width="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleClick}>Clear Cart</button>
    </div>
  );
}
