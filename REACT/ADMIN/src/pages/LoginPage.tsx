import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

interface LoginForm {
  username: string;
  password: string;
}

const defaultCredentials = {
  username: 'admin',
  password: 'password',
};

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [form, setForm] = useState<LoginForm>({
    username: 'admin',
    password: 'password',
  });

  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.username || !form.password) {
      setError('Please fill in both fields');
      return;
    }
    if (form.username === defaultCredentials.username && form.password === defaultCredentials.password) {
      onLogin(form.username, form.password);
    } else {
      setError('Invalid username or password');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;

