import { Route, Routes } from "react-router";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

const Router = () => {
   return (
      <Routes>
         <Route exact path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
      </Routes>
   );
};

export default Router;
