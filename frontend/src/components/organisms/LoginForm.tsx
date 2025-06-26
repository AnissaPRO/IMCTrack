import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { loginUser } from '../../helpers/api';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

export const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await loginUser(form);
      const token = result.data.token;
      localStorage.setItem('token', token);
      const decoded = jwt.verify(token, "supersecret");
      console.log("token décodé",decoded);
      navigate("/profile");
      alert('Connexion réussie');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la connexion');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <Input name="password" placeholder="Mot de passe" type="password" value={form.password} onChange={handleChange} />
      <Button type="submit">Se connecter</Button>
    </form>
  );
};
