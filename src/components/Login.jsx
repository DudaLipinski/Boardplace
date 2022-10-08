import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { selectors as userSelectors } from "../state/user";

export const Login = () => {
  const user = {};
  const userData = useSelector(userSelectors.getUser);
  const navigate = useNavigate();

  const Login = (event) => {
    event.preventDefault();

    if (Object.keys(userData).length === 0) {
      return alert("Account not exist");
    }

    if (
      user.email === userData.user.email &&
      user.password === userData.user.password
    ) {
      navigate("/");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    user[name] = value;
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={Login}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          minength="8"
          onChange={handleChange}
          required
        ></input>
        <button>Login</button>
      </form>
      <Link className="login__create-account" to="/create-account">
        Create account
      </Link>
    </div>
  );
};
