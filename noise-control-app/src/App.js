import React from "react";
import Login from "./components/Login";
import OnboardingWelcome from "./components/OnboardingWelcome";
import OnboardingBasic from "./components/OnboardingBasic";
import OnboardingIntake from "./components/OnboardingIntake";
import OnboardingPreferences from "./components/OnboardingPreferences";
import Jungle from "./components/jungle";

import WelcomePage from "./components/WelcomePage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <WelcomePage />
      <Login />
      <OnboardingWelcome />
      <OnboardingBasic />
      <OnboardingIntake />
      <OnboardingPreferences />
      <Jungle />
    </div>
  );
}

export default App;
