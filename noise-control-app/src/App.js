import React, { useState } from "react";

import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import MasterForm from "./components/MasterForm";
import OnboardingWelcome from "./components/OnboardingWelcome";
import OnboardingBasic from "./components/OnboardingBasic";
import OnboardingIntake from "./components/OnboardingIntake";
import OnboardingPreferences from "./components/OnboardingPreferences";

import "./App.scss";

function App() {
  const [teacher, setTeachers] = useState([]);

  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/login"
        render={props => (
          <Login {...props} login={auth.login} loginHandler={setTeachers} />
        )}
      />
      <Route exact path="/onboarding/welcome" component={MasterForm} />

      <Route exact path="/onboarding/basic" component={OnboardingBasic} />
      <Route exact path="/onboarding/intake" component={OnboardingIntake} />
      <Route
        exact
        path="/onboarding/preferences"
        component={OnboardingPreferences}
      />
    </div>
  );
}

export default App;
