import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@material-ui/core/IconButton";
import { IconFlagUS } from "material-ui-flags";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const responseGoogle = (response) => {
    setSignIn(true);
  };

  const logOut = (respons) => {
    setSignIn(false);
  };
  const [isShown, setIsShown] = useState(false);
  const [isSignIn, setSignIn] = useState(false);
  return (
    <div id="nav">
      <Link to="/">
        <img
          className="nav_click"
          id="amazon_logo"
          src="amazon_logo.png"
          alt="Amazon Logo"
        />
      </Link>

      <a href=" " className="nav_click" id="location">
        <LocationOnIcon id="location_icon" />
        <div id="location_text">
          <span id="location_line1">Delivey to Yue</span>
          <div id="location_line2">
            <span id="location_line2_city">College Station </span>
            <span id="location_line2_zip">77840</span>
          </div>
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
      <a
        href=" "
        className="nav_click"
        id="sign"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && !isSignIn && (
          <div id="dropdown_sigin">
            <GoogleLogin
              clientId="818198889027-8dhoghdjda5q4a6i7qupi2lfild7s2ng.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
              isSignedIn={true}
            />
          </div>
        )}
        {isShown && isSignIn && (
          <div id="dropdown_signout">
            <GoogleLogout buttonText="Log Out" onSuccess={logOut} />
          </div>
        )}
        <div id="sign_status">
          {!isSignIn && <span>Sign in</span>}
          {isSignIn && <span>Yue</span>}
        </div>
      </a>

      <a href=" " className="nav_click" id="order_check">
        <div id="return_and_order">
          <span id="return">Returns</span>
          <span id="order">&Orders</span>
        </div>
      </a>
      <Link to="/ShopCart" className="nav_click" id="cart">
        <AddShoppingCartIcon id="cart_logo" />
        <div id="cart_text">
          <span>cart</span>
        </div>
        <span id="cart_number">{basket?.length}</span>
      </Link>
    </div>
  );
}

export default Header;
