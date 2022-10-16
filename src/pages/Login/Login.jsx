import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Login.styles";
import { authUser } from "../../services";
import { useDispatch } from "react-redux";
import { actions as userActions } from "../../state/user";
import illustration from "../../assets/loginIllustration.png";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const login = {};

    for (const [key, value] of formData.entries()) {
      login[key] = value;
    }

    authUser(login)
      .then((user) => {
        dispatch(userActions.removeUser());
        dispatch(userActions.addUser(user));
      })
      .catch((error) => alert(error.message));

    navigate("/dashboard");
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.WrapperForm>
            <Styled.Title>Boardplace</Styled.Title>
            <Styled.Description>
              Please fill your detail to access your account.
            </Styled.Description>
            <Styled.Form onSubmit={doLogin}>
              <Styled.Label htmlFor="email">E-mail</Styled.Label>
              <Styled.Field
                type="email"
                name="email"
                id="email"
                required
              ></Styled.Field>
              <Styled.Label htmlFor="password">Password</Styled.Label>
              <Styled.Field
                type="password"
                name="password"
                id="password"
                minength="8"
                required
              ></Styled.Field>
              <Styled.Button size="large" type="primary">
                Login
              </Styled.Button>
            </Styled.Form>
            <Styled.SignUpText>
              Don’t have an account?
              <Styled.SignUp to="/create-account">Sign up</Styled.SignUp>
            </Styled.SignUpText>
          </Styled.WrapperForm>
          <Styled.WrapperIllustration>
            <Styled.Illustration src={illustration} alt="" />
          </Styled.WrapperIllustration>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
};
