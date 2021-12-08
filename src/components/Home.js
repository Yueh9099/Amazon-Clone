import Product from "./Product";
import "./Product.css";
import Iphone13PM from "../assets/productsImg/iphone13ProMax.jpg";
import AlienWare from "../assets/productsImg/DellAlienWare.jpg";
import Legion7 from "../assets/productsImg/LenovoLegion7.jpg";
import Beanie from "../assets/productsImg/Beanie.jpg";
import Bulb from "../assets/productsImg/bulb.jpg";
import Sliper from "../assets/productsImg/Slipper.jpg";
import Sweatshirt from "../assets/productsImg/sweatshirt.jpg";
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
        <div id="products_row1">
          <Product
            title="Apple iPhone 13 Pro Max (1TB, Sierra Blue) [Locked] + Carrier Subscription"
            image={Iphone13PM}
            price={1299}
            rate={4.5}
          />
          <Product
            title="Alienware m17 R4, 17.3 inch FHD (Full HD) Gaming Laptop - Intel Core 
            i7-10870H, 16GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3060"
            image={AlienWare}
            price={2500}
            rate={3.9}
          />
          <Product
            title="Lenovo Legion Slim 7 15 Gaming Laptop 15.6 FHD 165Hz IPS 100% sRGB Display AMD Octa-Core Ryzen 7 5800H 16GB RAM 512GB SSD GeForce RTX 3060"
            image={Legion7}
            price={1799}
            rate={3.6}
          />
          <Product
            title="Lenovo Legion Slim 7 15 Gaming Laptop 15.6 FHD 165Hz IPS 100% sRGB Display AMD Octa-Core Ryzen 7 5800H 16GB RAM 512GB SSD GeForce RTX 3060"
            image={AlienWare}
            price={1799}
            rate={3.6}
          />
        </div>

        <div id="products_row2">
          <Product
            title="Hanes Men's EcoSmart Sweatshirt"
            image={Sweatshirt}
            price={10}
            rate={4.6}
          />
          <Product
            title="Carhartt Men's Knit Cuffed Beanie"
            image={Beanie}
            price={20}
            rate={4.8}
          />
          <Product
            title="FOCO Mens NFL Team Logo Moccasin Slippers"
            image={Sliper}
            price={34}
            rate={4.2}
          />
          <Product
            title="Sengled Smart Light Bulbs, Color Changing Alexa Light Bulb Bluetooth Mesh, Smart Bulbs That Work with Alexa Only, Dimmable LED Bulb A19 E26 Multicolor, High CRI, High Brightness, 9W 800LM, 1Pack"
            image={Bulb}
            price={5.3}
            rate={4.8}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
