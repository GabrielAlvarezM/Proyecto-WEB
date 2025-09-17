import React from 'react';
import {Link, useNavigate} from 'react-router-dom'; 
import './DashboardPage.css';




const DashboardPage: React.FC = () => {


  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/login');
  };

  return (

    <div className="dashboard-container">

      <button onClick={handleGoBack} className="back-button">
        ‹ Salir
      </button>

      <Link to="/diets" className="dashboard-section diet-section">
        <div className="section-overlay">
          <h2>Planes de Alimentación</h2>
        </div>
      </Link>

      <Link to="/workouts" className="dashboard-section exercise-section">
        <div className="section-overlay">
          <h2>Planes de Ejercicio</h2>
        </div>
      </Link>

      <Link to="/supplements" className="dashboard-section supplements-section">
        <div className="section-overlay">
          <h2>Suplementación</h2>
        </div>
      </Link>
    </div>
  );
};

export default DashboardPage;