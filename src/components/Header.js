import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@material-ui/core/IconButton";
import { IconFlagUS } from "material-ui-flags";
function Header() {
  return (
    <div id="nav">
      <img
        className="nav_click"
        id="amazon_logo"
        src="amazon_logo.png"
        alt="Amazon Logo"
      />

      <a href=" " className="nav_click" id="location">
        <LocationOnIcon id="location_icon" />
        <div id="location_text">
          <span id="location_line1">Delivey to Yue</span>
          <span id="location_line2_city">College Station </span>
          <span id="location_line2_zip">77840</span>
        </div>
      </a>
      <div id="search">
        <input id="nav_search_input" type="text" />
        <div id="nav_search_icon_wrap">
          <SearchIcon id="nav_search_icon" />
        </div>
      </div>
      <a className="nav_click" id="language">
        <IconButton>
          <IconFlagUS />
        </IconButton>
      </a>
      <a href=" " className="nav_click" id="sign">
        <div id="sign_status">
          <span>Sign in</span>
        </div>
      </a>

      <a className="nav_click" id="order_check">
        <div id="return_and_order">
          <span id="return">Returns</span>
          <span id="order">&Orders</span>
        </div>
      </a>
      <a className="nav_click" id="cart">
        <AddShoppingCartIcon id="cart_logo" />
        <div id="cart_text">
          <span>cart</span>
        </div>
      </a>
    </div>
  );
}

export default Header;
