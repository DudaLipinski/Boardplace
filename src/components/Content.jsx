import React from "react";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../state/user";

export const Content = () => {
  const userData = useSelector(userSelectors.getUser);
  const { firstName, lastName, email, age } = userData;

  return (
    <div data-testid="user-details">
      <p data-testid="user-details__name">
        {firstName} {lastName}
      </p>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  );
};
