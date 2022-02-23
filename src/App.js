import { useSelector } from "react-redux";
import { selectUSer } from "./features/userSlice";
import React from 'react';
import Logout from "./Components/Logout";
import Login from './Components/Login';
import "./App.css"

export const App = () => {
    const user =useSelector(selectUSer);
  return (
    <div>
       {user ? <Logout /> : <Login />}
    </div>
  )
}

export default App