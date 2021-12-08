import Rating from "@mui/material/Rating";
import { useStateValue } from "../StateProvider";

function Product({ title, image, price, rate }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        
        title: title,
        image: image,
        price: price,
        rate: rate,
      },
    });
  };



  return (
    <div id="product_content">
      <div id="product_top">
        <div id="product_title">{title}</div>
        <div id="off"></div>
        <div id="product_price">
          <span id="dollar_sign">$</span>
          <span id="product_price_number">{price}</span>
        </div>
        <Rating name="half-rating-read" value={rate} precision={0.5} readOnly />
      </div>

      <div id="product_image">
        <img src={image} alt="" />
      </div>

      <div id="product_bottom">
        <button onClick={addToBasket} id="product_add_button">Add to Cart</button>
      </div>
    </div>
  );
}
export default Product;
