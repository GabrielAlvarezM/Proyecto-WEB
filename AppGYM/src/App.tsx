import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage'; 
import DashboardPage from './components/DashboardPage';
import RegistrationPage from './components/RegistrationPage';
import DietPage from './components/DietPage';
import WorkoutPage from './components/WorkoutPage';
import SuplementPage from './components/SupplementPage';

function App() {
  return (
    <Routes>
      {/* placeholder. */}
      {/* placeholder */}
      
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="/diets" element={<DietPage />} />
      <Route path="/workouts" element={<WorkoutPage />} />
      <Route path="/supplements" element={<SuplementPage />} />
      
    </Routes>

  );
}

export default App;