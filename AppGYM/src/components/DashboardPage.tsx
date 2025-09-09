import React from 'react';
import { Link } from 'react-router-dom'; 
import './DashboardPage.css';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Link to="/dietas" className="dashboard-section diet-section">
        <div className="section-overlay">
          <h2>Planes de Alimentación</h2>
        </div>
      </Link>

      <Link to="/ejercicios" className="dashboard-section exercise-section">
        <div className="section-overlay">
          <h2>Planes de Ejercicio</h2>
        </div>
      </Link>

      <Link to="/suplementos" className="dashboard-section supplements-section">
        <div className="section-overlay">
          <h2>Suplementación</h2>
        </div>
      </Link>
    </div>
  );
};

export default DashboardPage;