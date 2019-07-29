import React from "react";
import Login from "./components/Login";
import OnboardingBasic from "./components/OnboardingBasic";
import WelcomePage from "./components/WelcomePage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <WelcomePage />
      <OnboardingBasic />
      <Login />
    </div>
  );
}

export default App;
