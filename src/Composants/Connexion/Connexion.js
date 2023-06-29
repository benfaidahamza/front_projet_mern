import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Header/Navbar';
import './Connexion.css';

export default function Connexion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    setUsername('');
    setPassword('');
    setError('');
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { username, password });
      console.log(response);
    } catch (error) {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h1>Connexion</h1>
          <div className="error-message">{error}</div>
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </>
  );
}