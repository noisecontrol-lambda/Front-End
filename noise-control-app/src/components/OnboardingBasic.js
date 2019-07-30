import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingBasic = props => {
  return (
    <Card className="onboarding-basic">
      <h1>Let's Get Started.</h1>
      <p>First, tell us who you are and create your login info.</p>
      <form className="onboarding-basic-form">
        <input type="text" name="firstName" placeholder="First name." />

        <input type="text" name="lastName" placeholder="Last name." />

        <input
          type="email"
          name="email"
          placeholder="Email."
          value={props.email}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="userName"
          placeholder="User name."
          value={props.userName}
          onChange={props.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Set password."
          value={props.password}
          onChange={props.handleChange}
        />
        <Button className="onboarding-basic-button">Next: class info</Button>
      </form>
    </Card>
  );
};

export default OnboardingBasic;
