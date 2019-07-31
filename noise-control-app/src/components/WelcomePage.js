import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Card className="welcome">
      <h1>Welcome to back to Noise Control</h1>
      <Link to="./Login">
        <Button className="login-button">Log in </Button>
      </Link>

      <Link to="./onboarding/welcome">
        <Button className="signup-button">Create Account</Button>
      </Link>
    </Card>
  );
};

export default WelcomePage;
