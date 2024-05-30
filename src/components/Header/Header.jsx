import logo from '../../assets/logo/BrainFlix-logo.svg'
import profileImage from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="brainflix logo" />
      <section className="header__right-controls">
        <input className='header__input'></input>
        <button>Upload</button>
        <img className='header__profile-image' src={profileImage} alt="user profile image" />
      </section>
    </header>
  )
};

export default Header;