import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { authUser } from './services'

import { useDispatch } from 'react-redux'
import { actions as userActions } from './state/user'
import { useSelector } from 'react-redux'
import { selectors as userSelectors } from './state/user'

import { MenuLayoutWrapper } from './components/MenuLayoutWrapper/MenuLayoutWrapper'
import { Login } from './pages/Login/Login'
import { CreateAccount } from './pages/CreateAccount/CreateAccount'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Profile } from './pages/Profile'
import { FirstPlayer } from './pages/FirstPlayer/FirstPlayer'
import { CreateMatch } from './pages/Match/CreateMatch'
import { MatchList } from './pages/Match/MatchList'

const AppRoutes = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      authUser(foundUser)
        .then((user) => {
          dispatch(userActions.addUser(user))
        })
        .catch((error) => alert(error.message))
    }
  }, [])

  return isLoggedIn ? (
    // <AuthenticatedRoutes></AuthenticatedRoutes>

    <MenuLayoutWrapper>
      <Routes>
        {/* logged in */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/matches" element={<MatchList />} />
        <Route path="/match" element={<CreateMatch />} />
        <Route path="/first-player" element={<FirstPlayer />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </MenuLayoutWrapper>
  ) : (
    // <UnauthenticatedRoutes></UnauthenticatedRoutes>
    <div>
      <Routes>
        {/* logget out */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
