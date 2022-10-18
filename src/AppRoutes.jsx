import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { CreateAccount } from './pages/CreateAccount/CreateAccount'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Profile } from './pages/Profile'
import { FirstPlayer } from './pages/FirstPlayer/FirstPlayer'
import { useSelector } from 'react-redux'
import { selectors as userSelectors } from './state/user'
import { MenuLayoutWrapper } from './components/MenuLayoutWrapper/MenuLayoutWrapper'

const AppRoutes = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn)

  return isLoggedIn ? (
    // <AuthenticatedRoutes></AuthenticatedRoutes>

    <MenuLayoutWrapper>
      <Routes>
        {/* logged in */}
        <Route path="/profile" element={<Profile />} />
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
