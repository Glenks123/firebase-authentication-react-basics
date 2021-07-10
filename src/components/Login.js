import React, { useState } from 'react';
import { auth } from '../firebase';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      console.log('Successfully signed in.');
    });
  };

  return (
    <center>
      <div id="modal-login" style={{ width: '50%', marginTop: '50px' }}>
        <div className="modal-content">
          <h4>Login</h4>
          <br />
          <form id="login-form">
            <div className="input-field">
              <input
                type="email"
                id="login-email"
                name="email"
                onChange={changeHandler}
                required
              />
              <label htmlFor="login-email">Email address</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                id="login-password"
                name="password"
                onChange={changeHandler}
                required
              />
              <label htmlFor="login-password">Your password</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0" onClick={onLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </center>
  );
};

export default Login;
