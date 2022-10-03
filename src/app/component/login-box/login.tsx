
import { Button, Form, Input } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { LoginModel } from '../../models/LoginModel';
import { auth } from "../../firebase/firebase-config";
import './style.css'
import { useNavigate } from "react-router-dom"; // v6
const LoginBox: React.FC = () => {
    const [emailInput, setEmailInput] = useState<string>('')
    const [passwordInput, setPasswordInput] = useState<string>('')
    const navigate = useNavigate();
    const login = async () => {

        try {
            const user = await signInWithEmailAndPassword(
                auth,
                emailInput,
                passwordInput
            );
            console.log(user);
            navigate("/home");  
        } catch (error: any) {
            console.log(error.message);
        }
    };
    return (
        <div className='login-box-container'>
            <h3> Login </h3>
            <input
                className='user-input'
                placeholder="Email"
                onChange={(event) => {
                    setEmailInput(event.target.value);
                }}
            />
            <input
                className='user-input'
                placeholder="Password"
                onChange={(event) => {
                    setPasswordInput(event.target.value);
                }}
            />

            <button
              className='btn-login'
                onClick={login}>
                Login
            </button>
        </div>
    )
}

export default LoginBox;