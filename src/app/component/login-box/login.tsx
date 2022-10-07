import { Button, Form, Input } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { LoginModel } from '../../models/LoginModel';
import { auth } from '../../firebase/firebase-config';
import './style.css';
import { useNavigate } from 'react-router-dom'; // v6
const LoginBox: React.FC = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const navigate = useNavigate();
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailInput,
        passwordInput
      );
      console.log(user);
      navigate('/home');
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className="login-box-container">
      <input
        className="user-input"
        placeholder="Username or Email address"
        onChange={(event) => {
          setEmailInput(event.target.value);
        }}
      />
      <input
        type={'password'}
        className="user-input"
        placeholder="Password"
        onChange={(event) => {
          setPasswordInput(event.target.value);
        }}
      />
      <div className="forgot_wrapper">
        <div className="forgot_wrapper_checkbox">
          <input type={'checkbox'} />
          <p>Remember me</p>
        </div>
        <p className="forgot">Forgot password?</p>
      </div>

      <button className="btn-login" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default LoginBox;
