'use client'
import React, { useState } from 'react';
import { setAuthToken } from '../utils/authutil';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter()

  const handleLogin = () => {
    // Add authentication logic here
    // For simplicity, let's consider any non-empty username as successful login

    if (username.trim() !== '') {
      setAuthToken(username);
      router.push('/dashboard');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      <form style={styles.form}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles : React.CSSProperties | any  = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#333', // Dark background color
    color: '#fff', // Light text color
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    margin: '4px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: '#555', // Dark input background color
    color: '#fff', // Light text color
  },
  button: {
    marginTop: '10px',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#007BFF', // Blue color for the button
    color: '#fff', // Light text color
    cursor: 'pointer',
    border: 'none',
  },
  header: {
    marginBottom: '16px',
  },
};

export default Login;
