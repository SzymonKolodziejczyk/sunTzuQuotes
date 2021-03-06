import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [ikon, setIcon] = useState('fas fa-bars');
  const handleShowMenu = () => {
    const hamburger = document.querySelector('.header__hamburger');
    const ul = document.querySelector('.header__menu');
    setHidden(!hidden);
    if (hidden) {
      ul.classList.remove('header__menu--hidden');
      setIcon('fas fa-times');
      hamburger.style.border = 'none';
    } else {
      ul.classList.add('header__menu--hidden');
      setIcon('fas fa-bars');
      hamburger.style.border = '2px solid white';
    }
  };
  return (
    <>
      <h1 className="header__logo">Wisdom of Sun Tzu</h1>
      <button
        type="button"
        className="header__hamburger"
        onClick={handleShowMenu}
      >
        <i className={ikon} />
      </button>
      <nav className="header__menu header__menu--hidden">
        <ul className="header__menuList">
          <li className="header__item">
            <NavLink
              to="/"
              exact
              activeClassName="header__item--active"
              onClick={handleShowMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/start"
              activeClassName="header__item--active"
              onClick={handleShowMenu}
            >
              Start
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/contact"
              activeClassName="header__item--active"
              onClick={handleShowMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
