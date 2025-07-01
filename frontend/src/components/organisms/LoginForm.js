import { useState } from 'react';
import { Button } from '../atoms/Button';
import { loginUser } from '../../helpers/api';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { Input } from '../atoms/Input'; 

export const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(form);
      const token = result.data.token;
      localStorage.setItem('token', token);
     const decoded = jwtDecode(token, "supersecret");
     console.log("token décodé", decoded);
      navigate("/profile");
      alert('Connexion réussie');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la connexion');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Mot de passe"
        value={form.password}
        onChange={handleChange}
      />
      <Button type="submit">Se connecter</Button>
    </form>
  );
};
