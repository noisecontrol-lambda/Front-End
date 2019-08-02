import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingBasic = props => {
  const saveAndContinue = event => {
    event.preventDefault();
    props.nextStep();
  };

  return (
    <Card className="onboarding-basic">
      <h1>Let's Get Started.</h1>
      <p>First, tell us who you are and create your login info.</p>
      <form className="onboarding-basic-form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name."
          onChange={props.handleChange}
          value={props.firstName}
          autoFocus
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name."
          onChange={props.handleChange}
          value={props.lastName}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email."
          onChange={props.handleChange}
          value={props.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Set password."
          onChange={props.handleChange}
          value={props.password}
          required
        />
        <Button className="onboarding-basic-button" onClick={saveAndContinue}>
          Next: class info
        </Button>
      </form>
    </Card>
  );
};

export default OnboardingBasic;
