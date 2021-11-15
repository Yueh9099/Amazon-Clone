import Product from "./Product";
function Home() {
  return (
    <div id="content">
      <div id="middle_content">
        <img
          src="heroimage.jpg"
          id="background_img"
          className="center"
          alt="background"
        />
        <div id="products">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
