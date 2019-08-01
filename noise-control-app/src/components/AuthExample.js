import React from 'react';
import auth from '../authentication';

const AuthExample = props => {
  const userCredentials = {
    email: [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('')+'@example.com',
    password: '1234'
  }
  const userData = {
    ...userCredentials,
    firstName: "Jasper",
    lastName: "Jasperson",
    title: "Mr.",
    theme: "Safari"
  }

  return (
    <div>
      <div><button onClick={() => auth.register(userData)}>Register User</button></div>
      <div><button onClick={() => auth.login(userCredentials, props.setTeacher)}>Log In User</button></div>
    </div>
  )
}

export default AuthExample;