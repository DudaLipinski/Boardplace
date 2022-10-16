import styled from "styled-components"
import { Link } from "react-router-dom"

export const WrapperMenu = styled.header`
  width: 12%;
  height: 100vh;
  box-shadow: 5px 0 12px 1px rgb(219 214 214 / 58%);
  float: left;
`

export const Container = styled.div`
  height: inherit;
  padding: 0 30px;
`

export const WrapperProfile = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`

export const UserCharacter = styled.img`
  width: 85%;
  height: auto;
`

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  color: #344054;
  font-size: 18px;
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  height: inherit;
`

export const List = styled.ul`
  padding: 0;
`

export const ListItem = styled.li`
  list-style: none;
  padding: 14px 0;
`

export const Item = styled(Link)`
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  color: #344054;
  font-size: 16px;

  :hover {
    color: #344054;
    transition: 0.2s;
  }
`

export const Button = styled.button`
  cursor: pointer;
  border: 0px;
  border-radius: 8px;

  width: 100%;
  height: 44px;
  padding: 0 16px;

  background: rgb(13 17 129 / 0%);
  transition: 0.2s;
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
`
