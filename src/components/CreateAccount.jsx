import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../services";

import { useDispatch } from "react-redux";
import { actions as userActions } from "../state/user";
import { Content } from "./Content";

export const CreateAccount = () => {
  const dispatch = useDispatch();
  const [userIsCreated, setUserIsCreated] = useState(false);

  const createNewAccount = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = {};

    for (const [key, value] of formData.entries()) {
      user[key] = value;
    }

    createUser(user).then((createdUser) => {
      dispatch(userActions.removeUser());
      dispatch(userActions.addUser(createdUser));
      setUserIsCreated(true);
    });
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
              required
            ></input>
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              type="text"
              pattern="^[A-Za-z]+"
              name="lastName"
              required
            ></input>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" required></input>
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
            {/* <label htmlFor="password">Confirm password</label> */}
            {/* <input
              type="password"
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
