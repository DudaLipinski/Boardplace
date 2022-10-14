import React from "react";
import * as Styled from "./Menu.styles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectors as userSelectors } from "../../state/user";
import { useDispatch } from "react-redux";
import { actions as userActions } from "../../state/user";
import character from "../../assets/character_2.png";

export const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userIsLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  const userData = useSelector(userSelectors.getUser);

  const doLogout = () => {
    dispatch(userActions.removeUser());
    navigate("/login");
  };

  return (
    <Styled.WrapperMenu>
      <Styled.Container>
        <Styled.Navigation>
          {userIsLoggedIn ? (
            <>
              <Styled.WrapperProfile to="/profile">
                <Styled.UserCharacter src={character} alt="" />
                <Styled.UserName>{userData?.firstName}</Styled.UserName>
              </Styled.WrapperProfile>
              <Styled.List>
                <Styled.ListItem>
                  <Styled.Item to="/dashboard">Home</Styled.Item>
                </Styled.ListItem>
                <Styled.ListItem>
                  <Styled.Item to="/first-player">First Player</Styled.Item>
                </Styled.ListItem>
                <Styled.ListItem>
                  <Styled.Item to="/first-player">Roll dice</Styled.Item>
                </Styled.ListItem>
                <Styled.ListItem>
                  <Styled.Item to="/first-player">Boardgames</Styled.Item>
                </Styled.ListItem>
                <Styled.ListItem>
                  <Styled.Item to="/first-player">Friends</Styled.Item>
                </Styled.ListItem>
              </Styled.List>
              <Styled.List>
                <Styled.ListItem>
                  <Styled.Button onClick={doLogout}>Logout</Styled.Button>
                </Styled.ListItem>
              </Styled.List>
            </>
          ) : (
            <Styled.List>
              <Styled.ListItem>
                <Link to="/login">Login</Link>
              </Styled.ListItem>
            </Styled.List>
          )}
        </Styled.Navigation>
      </Styled.Container>
    </Styled.WrapperMenu>
  );
};
