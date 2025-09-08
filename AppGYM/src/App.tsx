import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'; 
import DashboardPage from './components/DashboardPage';

function App() {
  return (

    <Routes>
      {/* placeholder. */}
      {/* placeholder */}
      
      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* placeholder*/}
    </Routes>

  );
}

export default App;