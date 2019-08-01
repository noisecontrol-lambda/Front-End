import AuthExample from "./components/AuthExample";
import React, { useState, useEffect } from "react";
import Class from "./components/Class";
import Jungle from "../src/components/safariComponent/jungle";
import Ocean from "../src/components/safariComponent/ocean";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import MasterForm from "./components/MasterForm";
// import OnboardingWelcome from "./components/OnboardingWelcome";
import OnboardingBasic from "./components/OnboardingBasic";
import OnboardingIntake from "./components/OnboardingIntake";
import OnboardingPreferences from "./components/OnboardingPreferences";
import auth from "./authentication";
import PreviousSafaris from "./components/PreviousSafaris"
import axiosWithAuth from './axiosWithAuth';

import "./App.scss";

function App() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axiosWithAuth
      .get(`https://noise-controller-backend.herokuapp.com/api/teachers`)
      .then(res => {
        setTeachers(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  },[])

  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/login"
        render={props => (
          <Login
            {...props}
            teachers={teachers}
            login={auth.login}
            loginHandler={setTeachers}
          />
        )}
      />
      <Route exact path="/onboarding/welcome" component={MasterForm} />
      <Route exact path="/onboarding/basic" component={OnboardingBasic} />
      <Route exact path="/onboarding/intake" component={OnboardingIntake} />
      <Route
        exact path="/onboarding/preferences"
        component={OnboardingPreferences}
      />
      <Route exact path="/class/"
      render={props => (<Class {...props} teachers={teachers} />)} />
      <Route exact path="/class/previoussafaris"
      render={props => (<Class {...props} teachers={teachers} />)} />

      <AuthExample setTeacher={setTeachers} />
      <WelcomePage />
      <Jungle />
      <Ocean />
    </div>
  );
}

export default App;
