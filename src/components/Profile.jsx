import React from "react";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../state/user";

export const Profile = () => {
  const userData = useSelector(userSelectors.getUser);
  const userIsLoggedIn = useSelector(userSelectors.getIsLoggedIn);

  if (!userData) {
    return;
  }

  const { firstName, lastName, email, age } = userData;

  return (
    <div>
      {userIsLoggedIn ? (
        <div data-testid="user-details">
          <p data-testid="user-details__name">
            {firstName} {lastName}
          </p>
          <p>{email}</p>
          <p>{age}</p>
        </div>
      ) : (
        <p>You need to login</p>
      )}
    </div>
  );
};
