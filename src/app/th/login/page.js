'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import '../../globals.css'
import Swal from 'sweetalert2'
import CheckMark from '../../../../public/check-mark.png'
import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';

// import AuthContext from "../../../context/AuthProvider.jsx";

// import axios from '../../api/axios';
// const LOGIN_URL = '/auth';


export default function Login() {
  const router = useRouter();

//   const { setAuth } = useContext(AuthContext);
  
  const errRef = useRef();
  const userRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setErrMsg('');
}, [username, password])

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        { username, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
    
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
    }
}

  return (
    <main>
      <div>
        <h2 className="login-text">เข้าสู่ระบบ</h2>
        <div className="login-gui">
          <form id="loginForm">
            <label htmlFor="username" className="padding-down-lable">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              ref={userRef} 
            />

            <label htmlFor="password" className="padding-space-lable">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </form>
          <a className="button-home" type="button">
            <button className="button" onClick={handleSubmit}>
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