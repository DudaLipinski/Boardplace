import React from "react";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../state/user";
import { Menu } from "./Menu/Menu";
import { Canva, WrapperContent } from "./Canva";
import { LoggedOut } from "./LoggedOut";

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
                  {userData?.firstName} {userData?.lastName}
                </p>
                <p>{userData?.email}</p>
                <p>{userData?.age}</p>
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
