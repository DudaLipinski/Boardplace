import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login/Login"
import { CreateAccount } from "./pages/CreateAccount/CreateAccount"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Profile } from "./pages/Profile"
import { FirstPlayer } from "./pages/FirstPlayer/FirstPlayer"

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/first-player" element={<FirstPlayer />} />
    </Routes>
  )
}

export default appRoutes
