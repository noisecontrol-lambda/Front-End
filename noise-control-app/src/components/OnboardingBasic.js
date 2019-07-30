import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingBasic = () => {
  return (
    <Card className="onboarding-basic">
      <h1>Let's Get Started.</h1>
      <p>First, tell us who you are and create your login info.</p>
      <form className="onboarding-basic-form">
        <input type="text" name="firstName" placeholder="First name." />

        <input type="text" name="lastName" placeholder="Last name." />

        <input type="email" name="email" placeholder="Email." />
        <input type="text" name="userName" placeholder="User name." />
        <input type="password" name="password" placeholder="Set password." />
        <Button className="onboarding-basic-button">Next: class info</Button>
      </form>
    </Card>
  );
};

export default OnboardingBasic;
