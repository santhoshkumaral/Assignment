import React from "react";
import UserList from "./Component/GetUser/UserList";
import DarkMode from "./Component/Theme/DarkMode";
import "./App.css";
export default function App() {
  return (
    <div>
      <DarkMode />
      <UserList />
    </div>
  );
}
