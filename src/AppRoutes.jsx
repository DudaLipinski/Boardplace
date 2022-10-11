import { Routes, Route } from "react-router-dom";
import { Content } from "./components/Content";
import { CreateAccount } from "./components/CreateAccount";
import { Login } from "./components/Login";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/dashboard" element={<Content />} />
    </Routes>
  );
};

export default appRoutes;
