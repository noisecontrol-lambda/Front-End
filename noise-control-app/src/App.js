import React, { useState, useEffect } from "react";

import AuthExample from "./components/AuthExample";
import Class from "./components/Class";
import Jungle from "./components/jungle";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import MasterForm from "./components/MasterForm";
// import OnboardingWelcome from "./components/OnboardingWelcome";
import OnboardingBasic from "./components/OnboardingBasic";
import OnboardingIntake from "./components/OnboardingIntake";
import OnboardingPreferences from "./components/OnboardingPreferences";
import PrivateRoute from "./components/PrivateRoute";
import axiosWithAuth from "./axiosWithAuth";
import auth from "./authentication";

import "./App.scss";

function App() {
  const [teachers, setTeachers] = useState();
  console.log('teacher', teachers);

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
          <Login {...props} teachers={teachers} login={auth.login} loginHandler={setTeachers} />
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

      {/* <AuthExample setTeachers={setTeachers} /> */}
      {/* <WelcomePage /> */}
      <Class />
      <Jungle />


    </div>
  );
}

export default App;
