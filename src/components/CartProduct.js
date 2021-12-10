import { useStateValue } from "../StateProvider";
import Rating from "@mui/material/Rating";


function CartProduct({ id, title, image, price, rate }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };

  return (
    <div className="CartProduct_content">
      <div className="CartProduct_left">
        <div className ="CartProduct_image">
          <img src={image} alt="" />
        </div>
        <div className="CartProduct_left2">
          <div className="CartProduct_title">{title}</div>
          <div className="off"></div>
          <div className="CartProduct_price">
            <span className="dollar_sign">$</span>
            <span className="CartProduct_price_number">{price}</span>
          </div>
          <Rating
            name="half-rating-read"
            value={rate}
            precision={0.5}
            readOnly
          />
        </div>
      </div>

      <div className="CartProduct_right">
        <button onClick={removeFromBasket} className="CartProduct_remove_button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
export default CartProduct;
