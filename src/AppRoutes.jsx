import { Routes, Route } from "react-router-dom";
import { Content } from "./components/Content";
import { CreateAccount } from "./components/CreateAccount";
import { Login } from "./components/Login";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Content />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
};

export default appRoutes;
