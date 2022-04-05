import { Route, Routes } from "react-router";
import Dashboard from "../views/Dashboard";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

const Router = () => {
   return (
      <Routes>
         <Route exact path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   );
};

export default Router;
