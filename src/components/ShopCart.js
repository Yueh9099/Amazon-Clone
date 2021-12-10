import { useStateValue } from "../StateProvider";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
import "./ShopCart.css";
import "./CartProduct.css";

function ShopCart() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div id="cart_content">
      <div id="cart_content_middle">
        
        {basket.map((item) => (
          <CartProduct
            title={item.title}goi
            image={item.image}
            price={item.price}
            rate={item.rate}
          />
        ))}
        

        <div id="cart_total">
            <span>Total: </span>
          <span>
            {basket.reduce(
              (previousPrice, current) => {return previousPrice + current.price},0
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
