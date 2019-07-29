import React from "react";
import { Card } from "semantic-ui-react";

const Login = () => {
  return (
    <Card className="login">
      <h1>Welcome to back to Noise Control</h1>
      <h3>Log in here to see your classrooms.</h3>
      <p>
        Need to create an account? <span>Start here.</span>
      </p>
      <img src="./img/ian-parker-JRhVvF5VHG4-unsplash.jpg" alt="" />
      <form className="login-form">
        <input type="fname" name="fname" placeholder="First name goes here." />

        <input type="lname" name="lname" placeholder="Last name goes here." />

        <input type="email" name="email" placeholder="Email goes here." />
      </form>
    </Card>
  );
};

export default Login;
