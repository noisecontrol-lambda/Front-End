import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingBasic = props => {
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
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name."
          onChange={props.handleChange}
          value={props.lastName}
        />

        <input
          type="email"
          name="email"
          placeholder="Email."
          onChange={props.handleChange}
          value={props.email}
        />
        <input
          type="text"
          name="userName"
          placeholder="User name."
          onChange={props.handleChange}
          value={props.userName}
        />
        <input
          type="password"
          name="password"
          placeholder="Set password."
          onChange={props.handleChange}
          value={props.password}
        />
        <Button className="onboarding-basic-button">Next: class info</Button>
      </form>
    </Card>
  );
};

export default OnboardingBasic;
