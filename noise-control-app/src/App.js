import React, { useState } from "react";
import Login from "./components/Login";
import Jungle from "./components/jungle";
import MasterForm from "./components/MasterForm";
import auth from "./authentication"
import AuthExample from "./components/AuthExample"
import Class from './components/Class';
import WelcomePage from "./components/WelcomePage";

import "./App.scss";



function App() {


  const [teachers, setTeachers] = useState([])




  return (
    <div className="App">

      <AuthExample />
      <WelcomePage />
      <Class />
      <Jungle />
      

    </div>
  );
}

export default App;
