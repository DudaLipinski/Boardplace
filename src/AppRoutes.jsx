import { Routes, Route } from "react-router-dom";
import { Profile } from "./components/Profile";
import { CreateAccount } from "./components/CreateAccount";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default appRoutes;
