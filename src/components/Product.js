function Product({title, image, price, rate}) {
  return (
    <div id="product_content">
      <div>{title}</div>
      <img src={image} alt={title+ image} />
      <div>{image}</div>
      <div>{price}</div>
      <div>{rate}</div>
      <div>add </div>
    </div>
  );
}
export default Product;
