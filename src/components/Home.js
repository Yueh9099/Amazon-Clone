import Product from "./Product";
import "./Product.css";

function Home() {
  return (
    <div id="content">
      <div id="middle_content">
        <div id="screen_off">
          <img
            src="heroimage.jpg"
            id="background_img"
            className="center"
            alt="background"
          />
        </div>
        <div id="products">
          <Product
            title="xixi"
            image="iphone13ProMax.jpg"
            price="50$"
            rate="4.5"
          />
          {/* <Product title = "xixi" image = "haha" price = "50$" rate ="4.5" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
