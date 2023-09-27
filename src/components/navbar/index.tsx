import { useState } from 'react';
import './navbar.css';
import InputIcon from '../input-icon';
import searchIcon from '../../assets/icons/search.svg';
import Icon from '../icon';
import iconPerson from '../../assets/icons/person.svg';
import iconFavorites from '../../assets/icons/favorite.svg';
import iconShopping from '../../assets/icons/shopping.svg';
import iconHamburger from '../../assets/icons/hamburger.svg';
import iconClose from '../../assets/icons/close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="styled-navbar">
      <InputIcon
        size={20}
        inputIcon={searchIcon}
        value={''}
        placeholder="Search Anything.."
        setValue={() => {}}
        onClick={() => {}}
      />
      <h1 className="styled-navbar-header">Helendo</h1>
      <div className="styled-navbar-iconGoup">
        <div className="styled-navbar-iconGroup-person">
          <Icon icon={iconPerson} size={25} onClick={() => {}} />
        </div>
        <div className="styled-navbar-iconGroup-favorities">
          <Icon icon={iconFavorites} size={25} onClick={() => {}} />
        </div>
        <div className="styled-navbar-iconGroup-shopping">
          <Icon icon={iconShopping} onClick={() => {}} size={25} />
        </div>
        <div className="styled-navbar-iconGroup-hamburger">
          <button
            className="styled-navbar-iconGroup-hamburger-button"
            onClick={toggleMenu}
          >
            <Icon icon={iconHamburger} size={25} onClick={() => {}} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="styled-navbar-iconGroup-hamburger-menü">
          <div className="styled-navbar-iconGroup-hamburger-menü-inner">
            <Icon icon={iconClose} size={25} onClick={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
