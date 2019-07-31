import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";
import OnboardingWelcome from "./OnboardingWelcome";
import Login from "./Login";

const WelcomePage = () => {
  return (
    <Card className="welcome">
      <h1>Welcome to back to Noise Control</h1>
      <Link to="./Login">
        <Button className="login-button">Log in </Button>
      </Link>

      <Link to="./OnboardingWelcome">
        <Button className="signup-button">Create Account</Button>
      </Link>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/onboarding/welcome" component={OnboardingWelcome} />
      </div>
    </Card>
  );
};

export default WelcomePage;
