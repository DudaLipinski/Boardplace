import React from 'react'
import { useSelector } from 'react-redux'
import { selectors as userSelectors } from '../state/user'

export const Profile = () => {
  const userData = useSelector(userSelectors.getUser)

  return (
    <div>
      <>
        <div>
          <div data-testid="user-details">
            <p data-testid="user-details__name">
              Name: {userData?.firstName} {userData?.lastName}
            </p>
            <p>E-mail: {userData?.email}</p>
            <p>Age: {userData?.age}</p>
          </div>
        </div>
      </>
    </div>
  )
}
