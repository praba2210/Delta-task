import { useSelector } from "react-redux";
import { selectUSer } from "./features/userSlice";
import React from 'react';
import Team from "./Components/Team";
import Login from './Components/Login';
import "./App.css"


export const App = () => {
    const user =useSelector(selectUSer);
  return (
    <div>
       {user ? <Team /> : <Login />}
    </div>
  )
}

export default App