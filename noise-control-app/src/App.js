import React from "react";
import Login from "./components/Login";
import MasterForm from "./components/MasterForm";
import AuthExample from "./components/AuthExample"

import Class from './components/Class';
import WelcomePage from "./components/WelcomePage";

import "./App.scss";





function App() {
  return (
    <div className="App">
      <AuthExample />
      <WelcomePage />
      <Class />
    </div>
  );
}

export default App;
