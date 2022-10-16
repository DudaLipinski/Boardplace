import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { Canva, WrapperContent } from "../../components/Canva";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../../state/user";
import { LoggedOut } from "../../components/LoggedOut";

export const Dashboard = () => {
  const userIsLoggedIn = useSelector(userSelectors.getIsLoggedIn);

  return (
    <div>
      <Menu />
      {userIsLoggedIn ? (
        <>
          <Canva>
            <WrapperContent>
              <div>Welcome!</div>
            </WrapperContent>
          </Canva>
        </>
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};
