function Product({ title, image, price, rate }) {
  return (
    <div id="product_content">
      <div id="product_top">
        <div id="product_title">{title}</div>
        <div id="off"></div>
        <div id="product_price">
          <span id="dollar_sign">$</span>
          <span id="product_price_number">{price}</span>
        </div>
        <div id="product_rate">{rate}</div>
      </div>

      <div id="product_image">
        <img src={image} alt="" />
      </div>

      <div id="product_bottom"><button id="product_add_button">Add to Cart</button>  </div>
      <div></div>
    </div>
  );
}
export default Product;
