import Logo from '../../assets/images/Royal-Carribean-Logo.svg'
import TempMenu from '../../assets/images/hamburger-menu.svg'
import Heart from '../../assets/icons/heart.svg'
import Bell from '../../assets/icons/bell.svg'
import USFlag from '../../assets/images/us-flag.svg'
import Search from '../../assets/icons/search.svg'
import './Header.scss';
export default function Header() {
    return (
        <header className='header'>
            <div className="header__banner">
                <h2 className="header__country">UNITED STATES</h2>
                <img className='header__flag' src={USFlag} alt="" />
                <p className="header__phone">866-562-7625</p>
            </div>
            <div className="header__main-container">
                <div className="header__buttons-container">
                    <img className='header__menu' src={TempMenu} alt="" />
                    <img className='header__logo' src={Logo} alt="" />
                </div>
                <div className="header__nav-and-icons-container">
                    <nav className='header__nav-container'>
                        <p className="header__link">FIND A CRUISE</p>
                        <p className="header__link">DEALS</p>
                        <p className="header__link">SHIPS</p>
                        <p className="header__link">DESTINATIONS</p>
                        <p className="header__link">MANAGE MY CRUISE</p>
                    </nav>
                    <div className="header__icons-container">
                        <img className="header__icon" src={Heart} alt="" />
                        <img className="header__icon" src={Bell} alt="" />
                        <p className='header__link header__link--sign-in'>SIGN IN</p>
                        <img className="header__icon" src={Search} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}