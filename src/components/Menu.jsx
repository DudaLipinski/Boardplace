import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../state/user";
import { useDispatch } from "react-redux";
import { actions as userActions } from "../state/user";

export const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userIsLoggedIn = useSelector(userSelectors.getIsLoggedIn);

  const doLogout = () => {
    dispatch(userActions.removeUser());
    navigate("/login");
  };

  return (
    <header className="menu">
      <div className="menu__wrapper">
        {/* <nav className="menu-nav-left">
          <ul className="menu-nav-left__list"></ul>
        </nav> */}
        <nav className="menu-nav__right">
          <ul className="menu-nav-right__list">
            {userIsLoggedIn ? (
              <>
                <li className="menu-nav-right__item">
                  <Link to="/dashboard">Home</Link>
                </li>
                <li className="menu-nav-right__item">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="menu-nav-right__item">
                  <button onClick={doLogout}>Logout</button>{" "}
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
