import React from "react";
import { Card, Button } from "semantic-ui-react";

const Login = () => {
  return (
    <Card className="login">
      <h1>Welcome to back to Noise Control</h1>
      <h3>Log in here to see your classrooms.</h3>

      <form className="login-form">
        <input type="email" name="email" placeholder="Email goes here." />
        <input
          type="password"
          name="password"
          placeholder="Type password here."
        />
        <Button className="login-button">Submit</Button>
      </form>
      <p>
        Need to create an account?{" "}
        <span>
          Head over{" "}
          <a href="www.google.com" className="create-link">
            here.
          </a>
        </span>
      </p>
    </Card>
  );
};

export default Login;
