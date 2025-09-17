import React, {useState} from 'react'; 
import {Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import RegistrationPage from './components/RegistrationPage';
import DietPage from './components/DietPage';
import WorkoutPage from './components/WorkoutPage';
import SupplementPage from './components/SupplementPage';
import MainLayout from './components/MainLayout';

export interface UserProfile {
  username: string;
  email: string;
  height: string;
  weight: string;
  age: string;
  gender: string;
  skillLevel: string; 
}

function App() {

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleRegister = (data: UserProfile) => {
    setUserProfile(data);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage onRegister={handleRegister} />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="/diets" element={<MainLayout title="Plan de Alimentación"><DietPage profile={userProfile} /></MainLayout>} />
      <Route path="/workouts" element={<MainLayout title="Planes de Ejercicio"><WorkoutPage profile={userProfile} /></MainLayout>} />
      <Route path="/supplements" element={<MainLayout title="Suplementación"><SupplementPage profile={userProfile} /></MainLayout>} />
    </Routes>
  );
}

export default App;