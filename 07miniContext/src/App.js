import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import index from './index.css';


function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
