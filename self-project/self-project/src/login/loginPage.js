import React, { useState } from 'react';

function LoginPage(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = () => {
    if (
      userName === props.userName &&
      password === props.Password
    ) {
      setLoginStatus('Login successful!');
      if (props.onLoginSuccess) {
        props.onLoginSuccess();
      }
    } else {
      setLoginStatus('Not Yet Registered');
    }
  };

  return (
    <div>
      <input
        type='text'
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder='Username'
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button onClick={handleLogin}>Submit</button>
      {loginStatus && <h3>{loginStatus}</h3>}
    </div>
  );
}

export default LoginPage;