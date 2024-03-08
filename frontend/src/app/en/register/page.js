'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import '../../globals.css'
import Swal from 'sweetalert2'
import CheckMark from '../../../../public/check-mark.png'
import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';

import axios from '../../api/axios.js';

const Registration = () => {
  const errRef = useRef();
  const userRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const REGISTRATION_URL = 'http://localhost:5001/api/register';

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [username, password, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTRATION_URL, { username, password, email });

      console.log(response);
      console.log(JSON.stringify({ username, password, email }));
      if (response.status === 200) {
        setSuccess(true);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'You can now login.',
        });
      }
    } catch (err) {
      if (!err?.response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Server is Not Responding. Please try again.',
        });
      } else if (err.response?.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid registration data. Please check your inputs.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Registration failed. Please try again later.',
        });
      }
    }
  };

  return (
    <main>
      <div>
        <h2 className="registration-text">Registration</h2>
        <div className="registration-gui">
          <form id="registrationForm">
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

            <label htmlFor="email" className="emailtext">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="inputbox email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your Email"
            />
          </form>
          <a className="registration-box" type="button">
            <button className="register" onClick={handleSubmit}>
              <Image
                className="iconeditregister"
                src={CheckMark}
                alt="check-mark-icon"
                height="auto"
                width="auto"
              />
              Register
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Registration;
