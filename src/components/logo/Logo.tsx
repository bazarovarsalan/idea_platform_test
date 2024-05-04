import logo from "../../assets/images/airplane_7606519.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo_wrapper">
      <img className="logo_img" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
