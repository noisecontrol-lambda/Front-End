import React from 'react';
import auth from '../authentication';

const AuthExample = () => {
  const userCredentials = {
    username: [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join(''),
    password: '1234'
  }
  const userData = {
    ...userCredentials,
    email: `${userCredentials.username}@example.com`,
    firstName: "Jasper",
    lastName: "Jasperson",
    title: "Mr.",
    theme: "Safari"
  }

  return (
    <div>
      <div><button onClick={() => auth.register(userData)}>Register User</button></div>
      <div><button onClick={() => auth.login(userCredentials)}>Log In User</button></div>
    </div>
  )
}

export default AuthExample;