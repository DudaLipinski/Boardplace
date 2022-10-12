import React from "react";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../state/user";

export const Dashboard = () => {
  const userIsLoggedIn = useSelector(userSelectors.getIsLoggedIn);

  return (
    <div>
      {userIsLoggedIn ? (
        <div data-testid="user-details">
          <p data-testid="user-details__name">Welcome!</p>
        </div>
      ) : (
        <p>You need to login</p>
      )}
    </div>
  );
};
