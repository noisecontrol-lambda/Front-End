import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

const Login = props => {
  const [user, setUser] = useState({ email: "", password: "" });

  function handleChange(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  }

  const submitHandler = event => {
    event.preventDefault();
    // props.login(user, loginHandler);
    console.log("user state", user);
    // then have some code to redirect to wherever you want them to go after login, don't worry about error handling yet until this works
  };

  return (
    <Card className="login">
      <h1>Welcome to back to Noise Control</h1>
      <h3>Log in here to see your classrooms.</h3>
      <form className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email goes here."
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Type password here."
          value={user.password}
          onChange={handleChange}
        />
        <Button className="login-button" onSubmit={event => submitHandler}>
          Submit
        </Button>
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
