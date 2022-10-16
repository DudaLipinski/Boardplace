import React from "react";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../state/user";
import { Menu } from "../components/Menu/Menu";
import { Canva, WrapperContent } from "../components/Canva";
import { LoggedOut } from "../components/LoggedOut";

export const Profile = () => {
  const userData = useSelector(userSelectors.getUser);
  const userIsLoggedIn = useSelector(userSelectors.getIsLoggedIn);

  return (
    <div>
      <Menu />
      {userIsLoggedIn ? (
        <>
          <Canva>
            <WrapperContent>
              <div data-testid="user-details">
                <p data-testid="user-details__name">
                  Name: {userData?.firstName} {userData?.lastName}
                </p>
                <p>E-mail: {userData?.email}</p>
                <p>Age: {userData?.age}</p>
              </div>
            </WrapperContent>
          </Canva>
        </>
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};
