import logo from "../../assets/logo/BrainFlix-logo.svg";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import icon from "../../assets/icons/upload.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="a blue play button next and the words brainflix" />
        </Link>
      </figure>
      <section className="header__right-controls">
        <input
          className="header__input header__input--search"
          placeholder="Search"
        ></input>

        <img
          className="header__profile-image"
          src={profileImage}
          alt="brainflix user avatar"
        />
        <Link to="/upload" className="header__btn">
          <img className="header__icon" src={icon} alt="magnifying glass" />
          Upload
        </Link>
      </section>
    </header>
  );
};

export default Header;
