import logo from "../../assets/logo/BrainFlix-logo.svg";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import icon from "../../assets/icons/upload.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo-container">
        <img className="header__logo" src={logo} alt="brainflix logo" />
      </figure>
      <section className="header__right-controls">
        <input className="header__input" placeholder="Search"></input>

        <img
          className="header__profile-image"
          src={profileImage}
          alt="user profile image"
        />
        <button className="header__btn">
          <img className="header__icon" src={icon} alt="search bar icon" />
          Upload
        </button>
      </section>
    </header>
  );
};

export default Header;
