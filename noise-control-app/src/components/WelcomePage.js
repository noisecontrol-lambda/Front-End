import React from "react";
import { Card, Button } from "semantic-ui-react";

const WelcomePage = () => {
  return (
    <Card className="welcome">
      <h1>Welcome to back to Noise Control</h1>
      <Button className="login-button">Log in</Button>
      <Button className="signup-button">Create an account</Button>
    </Card>
  );
};

export default WelcomePage;
