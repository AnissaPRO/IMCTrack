import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilPage } from './pages/ProfilPage';
import { AjoutFoodPage } from './pages/AjoutFoodPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/ajout-aliment" element={<AjoutFoodPage />} />
      </Routes>
    </Router>
  );
}

export default App;
