import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
// import { useSelector } from "react-redux";
// import { selectors as userSelectors } from "../state/user";

export const Menu = () => {
  return (
    <header className="menu">
      <div className="menu__wrapper">
        <nav className="menu-nav-left">
          <ul className="menu-nav-left__list">
            <li className="menu-nav-left__item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-nav-left__item">
              <Link to="/">About</Link>
            </li>
          </ul>
        </nav>
        <nav className="menu-nav__right">
          <ul>
            <Link to="/login">Login</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
