import Product from "./Product";
import "./Product.css";
import Iphone13PM from "../assets/productsImg/iphone13ProMax.jpg";
import AlienWare from "../assets/productsImg/DellAlienWare.jpg";
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
            image={Iphone13PM}
            price="1299"
            rate="4.5"
          />
          <Product
            title="Alienware m17 R4, 17.3 inch FHD (Full HD) Gaming Laptop - Intel Core 
            i7-10870H, 16GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3060"
            image={AlienWare}
            price="2500"
            rate="3.9"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
