import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import { MatchItem } from './pages/Match/MatchItem'
import { MatchList } from './pages/Match/MatchList'
import { AnimatePresence } from 'framer-motion'

const AuthenticatedRoutes = () => {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <AnimatePresence>
      <MenuLayoutWrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/matches" element={<MatchList />} />
          <Route path="/match" exact element={<MatchItem />} />
          <Route path="/match/:matchId" element={<MatchItem />} />
          <Route path="/first-player" element={<FirstPlayer />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </MenuLayoutWrapper>
    </AnimatePresence>
  )
}

const UnauthenticatedRoutes = () => {
  const location = useLocation

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </AnimatePresence>
  )
}

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

  return isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />
}

export default AppRoutes
