import React from "react";
import Login from "./components/Login";
import OnboardingBasic from "./components/OnboardingBasic";
import WelcomePage from "./components/WelcomePage";
import OnboardingWelcome from "./components/OnboardingWelcome";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <WelcomePage />
      <Login />
      <OnboardingWelcome />
      <OnboardingBasic />
    </div>
  );
}

export default App;
