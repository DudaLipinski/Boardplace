import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
  height: 100vh;
  height: -webkit-fill-available;
  height: fill-available;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  flex: 1 1;

  padding: 0 30px;
`;

export const WrapperForm = styled.div`
  flex: 1;
  padding: 0 150px;
  margin: auto;
`;

export const Title = styled.h1`
  margin-bottom: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;

  line-height: 48px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: #344054;
`;

export const Description = styled.p`
  margin-bottom: 36px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-top: 30px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
`;

export const Field = styled.input`
  border: 1px solid #d0d5dd;
  border-radius: 8px;

  width: -webkit-fill-available;
  width: fill-available;
  height: 44px;

  padding: 0 30px;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 30px;
  border: 0px;
  border-radius: 8px;

  width: 100%;
  height: 44px;
  background: #5429ff;
  color: white;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  :hover {
    background: #451fdb;
    transition: 0.2s;
  }
`;

export const SignUpText = styled.p`
  margin-top: 30px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #344054;
`;

export const SignUp = styled(Link)`
  padding-left: 10px;

  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  color: #5429ff;

  :hover {
    color: #451fdb;
    transition: 0.2s;
  }
`;

export const WrapperIllustration = styled.div`
  flex: 2;
  margin-top: 30px;
  background-color: #cbcce8;
  border-radius: 40px;
`;

export const Illustration = styled.img`
  width: auto;
  height: auto;
  margin: 0 auto;
  display: block;
`;
