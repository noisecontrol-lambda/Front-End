import AuthExample from "./components/AuthExample"
import React, { useState } from "react";
import Class from "./components/Class";
import Jungle from "../src/components/safariComponent/jungle";
import Ocean from "../src/components/safariComponent/ocean"
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import MasterForm from "./components/MasterForm";
import OnboardingWelcome from "./components/OnboardingWelcome";
import OnboardingBasic from "./components/OnboardingBasic";
import OnboardingIntake from "./components/OnboardingIntake";
import OnboardingPreferences from "./components/OnboardingPreferences";
import auth from "./authentication";

import "./App.scss";

function App() {
  const [teacher, setTeacher] = useState();
  console.log(teacher);

  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/login"
        render={props => (
          <Login {...props} teachers={teacher} login={auth.login} loginHandler={setTeacher} />
        )}
      />
      <Route exact path="/onboarding/welcome" component={MasterForm} />
      <Route exact path="/onboarding/basic" component={OnboardingBasic} />
      <Route exact path="/onboarding/intake" component={OnboardingIntake} />
      <Route
        exact path="/onboarding/preferences"
        component={OnboardingPreferences}
      />

      <AuthExample setTeacher={setTeacher} />
      <WelcomePage />
      <Class />
      <Jungle />
      <Ocean />

    </div>
  );
}

export default App;
