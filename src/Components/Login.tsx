import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';

//components
import Button from './Button';
//styles
import { Wrapper } from './Login.style';
//context

import { Context } from '../contex';
import { handleSignUp } from '../helpers';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);

    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      const accountId = await API.accountDetails(sessionId.session_id);
      setUser({ sessionId: sessionId.session_id, username, accountId });
      navigate('/');
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">Username or Password are WRONG</div>}
      <label>Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Log In" callback={handleSubmit} />
      <Button text="Sign Up" callback={handleSignUp} />
    </Wrapper>
  );
};

export default Login;
