import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingWelcome = () => {
  return (
    <Card className="welcome">
      <h1>Welcome to Noise Control</h1>
      <p>
        We help managing your class a breeze so you can focus on keeping their
        attention.
      </p>
      <Button className="welcome-button">Let's Go!</Button>
    </Card>
  );
};

export default OnboardingWelcome;
