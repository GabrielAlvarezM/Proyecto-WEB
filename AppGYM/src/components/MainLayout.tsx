import React from 'react';
import {useNavigate} from 'react-router-dom';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode; 
  title: string; 
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <div className="layout-container">
      <header className="layout-header">
        <button onClick={() => navigate('/dashboard')} className="back-button-menus">‹ Volver al Menú</button>
        <h1>{title}</h1>
      </header>
      <main className="layout-content">
        {children} 
      </main>
    </div>
  );
};

export default MainLayout;