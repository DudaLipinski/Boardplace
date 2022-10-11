import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../state/user";

export const Content = () => {
  const userData = useSelector(userSelectors.getUser);
  const [userIsLogged, setUserIsLogged] = useState(false);

  useEffect(() => {
    if (Object.values(userData).length !== 0) {
      setUserIsLogged(true);
    }
  }, [userData]);

  const { firstName, lastName, email, age } = userData;

  return (
    <div>
      {userIsLogged ? (
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
