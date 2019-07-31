import React from "react";
import Login from "./components/Login";
import Jungle from "./components/safariComponent/jungle";
import MasterForm from "./components/MasterForm";
import Ocean from "../src/components/safariComponent/ocean"

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
      <Jungle />
      <Ocean />

    </div>
  );
}

export default App;
