import styled from "styled-components"

import { useSelector } from "react-redux"
import { selectors as userSelectors } from "../../state/user"
// import { useDispatch } from "react-redux"
// import { actions as userActions } from "../../state/user"

import { Menu } from "../../components/Menu/Menu"
import { LoggedOut } from "../../components/LoggedOut"
import { Canva, WrapperContent } from "../../components/Canva"
// import { useEffect } from "react"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  cursor: pointer;
  margin-top: 30px;
  border: 0px;
  border-radius: 8px;

  height: 44px;
  background: #5429ff;
  color: white;
  padding: 0 15px;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  :hover {
    background: #451fdb;
    transition: 0.2s;
  }
`

const Field = styled.input`
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  width: 250px;
  height: 44px;

  padding: 0 30px;
`

export const Label = styled.label`
  margin-top: 30px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
`

export const FirstPlayer = () => {
  // const dispatch = useDispatch()

  const userIsLoggedIn = useSelector(userSelectors.getIsLoggedIn)

  // const addPlayer = (event) => {
  //   event.preventDefault()

  //   const formData = new FormData(event.target)
  //   const player = {}

  //   for (const [key, value] of formData.entries()) {
  //     player[key] = value
  //   }

    // dispatch(userActions.addPlayer(player));
  // }

  return (
    <>
      <Menu />
      {userIsLoggedIn ? (
        <>
          <Canva>
            <WrapperContent>
              <Form >
                <Label htmlFor="playerName">Player's name</Label>
                <Field
                  id="playerName"
                  type="text"
                  name="playerName"
                  required
                ></Field>
                <Button>Add player</Button>
              </Form>
            </WrapperContent>
          </Canva>
        </>
      ) : (
        <LoggedOut />
      )}
    </>
  )
}
