import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [rememberMe, setRem] = useState(true);
  const history = useHistory();

  // useEffect(() => {
  //   if (localStorage.getItem('user-info')) {
  //     history.push('/add');
  //   }
  // }, []);
  async function login() {
    console.warn(email, password, rememberMe);
    let credentials = { email, password, rememberMe };
    let result = await fetch('https://sigviewauth.sigmoid.io/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
    // history.push('add');
  }

  return (
    <div>
      <h1>Login Page</h1>
      <label id="email">Email</label>
      <input
        type="text"
        id="email-input"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
      />
      <br />
      <label id="password">Password</label>
      <input
        type="password"
        id="password-input"
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="password"
      />
      <br />
      <label id="remember">Remember Me</label>
      <input
        type="checkbox"
        id="remember-input"
        onChange={(e) => {
          setRem(e.target.checked);
        }}
      />
      <br />
      <button onClick={login}>Submit</button>
    </div>
  );
}
