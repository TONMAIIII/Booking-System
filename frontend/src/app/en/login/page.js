'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import '../../globals.css'
import Swal from 'sweetalert2'
import CheckMark from '../../../../public/check-mark.png'
import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';

import axios from '../../api/axios.js';


export default function Login() {
  const router = useRouter();

  
  const errRef = useRef();
  const userRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const LOGIN_URL = 'http://localhost:5000/api/login';

  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setErrMsg('');
}, [username, password])

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login",{ username, password });
    
      console.log(response);
      console.log(JSON.stringify({ username, password }));
      if (response.status === 200) {
        router.push('/home');
        
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Redirecting...',
        });
      }
    } catch (err) {
          if (!err?.response) {      
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Server is Not Response. Please try again.',
            });
          } else if (err.response?.status === 400) {      
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Missing username or password. Please try again.',
            });
          } else if (err.response?.status === 401) {      
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Invalid username or password. Please try again.',
            });
          } else {        
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Invalid username or password. Please try again.',
            });
          }
          // console.error(err);
    }
}

  return (
    <main>
      <div>
        <h2 className="login-text">Login</h2>
        <div className="login-gui">
          <form id="loginForm">
            <label htmlFor="username" className="usernametext">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="inputbox username-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              ref={userRef} 
              placeholder="Enter your Username"
            />

            <label htmlFor="password" className="passwordtext">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="inputbox password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your Password"
            />
          </form>
          <a className="login-box" type="button">
            <button className="login" onClick={handleSubmit}>
              <Image
                className="iconeditlogin"
                src={CheckMark}
                alt="check-mark-icon"
                height="auto"
                width="auto"
              />
              Login
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}