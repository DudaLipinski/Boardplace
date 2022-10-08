import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { actions as userActions } from "../state/user";
import { Content } from "./Content";

export const CreateAccount = () => {
  const dispatch = useDispatch();
  const [userIsCreated, setUserIsCreated] = useState(false);

  const user = {
    firstName: "",
    lastName: "",
    email: "",
    age: null,
    password: "",
  };

  const createNewAccount = (event) => {
    event.preventDefault();

    dispatch(userActions.createUser(user));
    setUserIsCreated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    user[name] = value;
  };

  return (
    <div>
      {!userIsCreated ? (
        <>
          <h1>New account</h1>
          <form onSubmit={createNewAccount}>
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              type="text"
              pattern="^[A-Za-z]+"
              name="firstName"
              onChange={handleChange}
              required
            ></input>
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              type="text"
              pattern="^[A-Za-z]+"
              onChange={handleChange}
              name="lastName"
              required
            ></input>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              onChange={handleChange}
              name="age"
              id="age"
              required
            ></input>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              id="email"
              required
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              minength="8"
              required
            ></input>
            {/* <label htmlFor="password">Confirm password</label> */}
            {/* <input
              type="password"
              onChange={handleChange}
              name="confirmPassword"
              id="confirmPassword"
              minLength="8"
              required
            ></input> */}
            <button>Create</button>
          </form>
          <Link className="login__create-account" to="/login">
            Login
          </Link>
        </>
      ) : (
        <Content />
      )}
    </div>
  );
};
