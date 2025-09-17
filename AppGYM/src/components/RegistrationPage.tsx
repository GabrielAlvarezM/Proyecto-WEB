import React, {useState} from 'react';
import './RegistrationPage.css';
import {useNavigate} from 'react-router-dom';
import type { UserProfile } from '../App';

interface RegistrationPageProps {
  onRegister: (data: UserProfile) => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onRegister }) => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [skillLevel, setSkillLevel] = useState('');

  
  const handleRegister = () => {
    onRegister({username, email, height, weight, age, gender, skillLevel});
    navigate('/dashboard');
  };


    return (
    <div className="register-container">
        
      <h1>Crea tu Perfil</h1>
      <form>
        
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa nuevo nombre de usuario"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Crea una contraseña segura"
          />
        </div>

        <div className="form-group">
          <label htmlFor="height">Estatura (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Ej: 175"
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Peso (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ej: 70"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Edad</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Ej: 25"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Género</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Selecciona tu género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="skillLevel">Nivel de Experiencia</label>
          <select id="skillLevel" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
            <option value="">Selecciona tu nivel</option>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>

        <div className="Indice de masa">
          <h3>Tu IMC: </h3>
        </div>

        <div className="button-group-register">
          <button type="button" onClick={handleRegister}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );

}

export default RegistrationPage;