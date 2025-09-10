
import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h1>GYMBUDDY</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" placeholder="Escribe tu usuario" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Escribe tu contraseña" />
        </div>
        <div className="button-group">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <button type="button" onClick={handleRegister}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage; 











