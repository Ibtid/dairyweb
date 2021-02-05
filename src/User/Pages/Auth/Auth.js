import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import dairyweb from '../../../Resources/Images/Logo.png';
import { useStateValue } from '../../../StateProvider/StateProvider';
import { v4 as uuidv4 } from 'uuid';

import './Auth.css';

const Auth = () => {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();
    dispatch({
      type: 'Register_User',
      registeredUser: {
        custID: uuidv4(),
        username: username,
        email: email,
        password: password,
        phoneNo: phoneNo,
      },
    });
  };
  const signIn = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGIN',
      currentUser: {
        username: username,
        password: password,
      },
    });
  };
  console.log(state.registeredUser);
  return (
    <div className='login '>
      <Link to='/'>
        <img className='login__logo' src={dairyweb} alt='DAIRYWEB' />
      </Link>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Username</h5>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Phone Number</h5>
          <input
            type='text'
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the DAIRYWEB Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          interest-Based Ads Notice
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your DAIRYWEB Account
        </button>
      </div>
    </div>
  );
};

export default Auth;
