import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../state/user";
import { useDispatch } from "react-redux";
import { actions as userActions } from "../state/user";

export const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector(userSelectors.getUser);
  const [userIsLogged, setUserIsLogged] = useState(false);

  useEffect(() => {
    if (Object.values(userData).length !== 0) {
      setUserIsLogged(true);
    }
  }, [userData]);

  const doLogout = () => {
    dispatch(userActions.removeUser());
    navigate("/login");
  };

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
            {userIsLogged ? (
              <li>
                <button onClick={doLogout}>Logout</button>{" "}
              </li>
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
