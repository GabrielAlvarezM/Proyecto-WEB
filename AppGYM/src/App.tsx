import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage'; 
import DashboardPage from './components/DashboardPage';
import RegistrationPage from './components/RegistrationPage';
import DietPage from './components/DietPage';
import WorkoutPage from './components/WorkoutPage';
import SuplementPage from './components/SupplementPage';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Routes>
      {/* placeholder. */}
      {/* placeholder */}
      
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="/diets" element={<MainLayout title="Plan de Alimentación"><DietPage /></MainLayout>} />
      <Route path="/workouts" element={<MainLayout title="Planes de Ejercicio"><WorkoutPage /></MainLayout>} />
      <Route path="/suplements" element={<MainLayout title="Suplementación"><SuplementPage /></MainLayout>} />
    
      
    </Routes>

  );
}

export default App;