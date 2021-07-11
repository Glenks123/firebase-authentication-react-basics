import React, { useState } from 'react';
import { auth, db } from '../firebase';

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    bio: '',
  });

  const changeHandler = (e) => {
    setSignUpInfo({
      ...signUpInfo,
      [e.target.name]: e.target.value,
    });
  };

  const authSignUp = (e) => {
    e.preventDefault();
    const { email, password, bio } = signUpInfo;
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      //console.log(cred);
      db.collection('users')
        .doc(cred.user.uid)
        .set({
          bio: bio,
        })
        .then(() => {
          console.log('Successfully Signed up!');
        });
    });
  };

  return (
    <center>
      <div id="modal-signup" style={{ width: '50%', marginTop: '50px' }}>
        <div className="modal-content">
          <h4>Sign up</h4>
          <br />
          <form id="signup-form">
            <div className="input-field">
              <input
                type="email"
                id="signup-email"
                name="email"
                onChange={changeHandler}
                required
              />
              <label htmlFor="signup-email">Email address</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                id="signup-password"
                name="password"
                onChange={changeHandler}
                required
              />
              <label htmlFor="signup-password">Choose password</label>
            </div>
            <div className="input-field">
              <input
                type="text"
                id="signup-bio"
                name="bio"
                onChange={changeHandler}
                required
              />
              <label htmlFor="signup-bio">One line bio</label>
            </div>
            <button
              className="btn yellow darken-2 z-depth-0"
              onClick={authSignUp}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </center>
  );
};

export default SignUp;
