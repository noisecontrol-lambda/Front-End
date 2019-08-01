import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

const Login = props => {
  // console.log("users data", props.teachers);

  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    console.log(
      "handle change",
      event.target.name,
      event.target.value,
      "updated user",
      updatedUser
    );
    setUser(updatedUser);
    console.log("user", user);
  }

  const submitHandler = async event => {
    event.preventDefault();

    props.login(user, props.loginHandler)
      .then(response => {
        if (!localStorage.getItem('userToken')) {
          setErrorMsg('Login error. Please check your info and try again.');
          setUser({ ...user, password: "" })
        } else {
          props.history.push('/class')
        }
      })
      .catch(error => {
        setErrorMsg(error);
      });
  };

  return (
    <Card className="login" onSubmit={submitHandler}>
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
        {errorMsg && <div className="login-error">{errorMsg}</div>}
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
