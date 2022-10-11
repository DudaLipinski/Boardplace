import React, { useState } from "react";
import { Content } from "./Content";
import { Link } from "react-router-dom";
import { authUser } from "../services";
import { useDispatch } from "react-redux";
import { actions as userActions } from "../state/user";

export const Login = () => {
  const dispatch = useDispatch();

  const [userIsLogged, setUserIsLogged] = useState(false);

  const doLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const login = {};

    for (const [key, value] of formData.entries()) {
      login[key] = value;
    }

    authUser(login)
      .then((user) => {
        dispatch(userActions.removeUser());
        dispatch(userActions.addUser(user));
        setUserIsLogged(true);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      {!userIsLogged ? (
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={doLogin}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" required></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              minength="8"
              required
            ></input>
            <button>Login</button>
          </form>
          <Link className="login__create-account" to="/create-account">
            Create account
          </Link>
        </div>
      ) : (
        <Content />
      )}
    </>
  );
};
