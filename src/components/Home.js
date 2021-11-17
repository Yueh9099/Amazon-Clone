import Product from "./Product";
import "./Product.css";
import iphone13PM from "../assets/productsImg/iphone13ProMax.jpg";
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
            title="Apple iPhone 13 Pro Max (1TB, Sierra Blue) [Locked] + Carrier Subscription"
            image={iphone13PM}
            price="1299"
            rate="4.5"
          />
          {/* <Product title = "xixi" image = "haha" price = "50$" rate ="4.5" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
