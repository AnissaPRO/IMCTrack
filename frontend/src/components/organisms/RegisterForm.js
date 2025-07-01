import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { registerUser } from '../../helpers/api';
import { isEmailValid, isPasswordValid } from '../../helpers/validation';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  //const navigate = useNavigate();
 const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);
const handleChange = async (e) => { 
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!isEmailValid(form.email)) {
      setError('Email invalide');
      return;
    }
    if (!isPasswordValid(form.password)) {
      setError('Le mot de passe doit faire au moins 6 caractères');
      return;
    }
    if (!form.name.trim()) {
      setError('Le nom est obligatoire');
      return;
    }

    try {
      await registerUser(form);
      //navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || "Erreur lors de l'inscription");
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <Input
        label="Nom"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Mot de passe"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <Button type="submit">S'inscrire</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};
