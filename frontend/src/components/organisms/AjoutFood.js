import { useState } from 'react';
import { addFood } from '../../helpers/api';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export const AddFoodForm = () => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    calories_per_100g: '',
    protein: '',
    fat: '',
    carbs: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newFood = {
        name: form.name,
        category: form.category,
        calories_per_100g: parseFloat(form.calories_per_100g),
        protein: parseFloat(form.protein),
        fat: parseFloat(form.fat),
        carbs: parseFloat(form.carbs),
      };

      await addFood(newFood);
      alert('Aliment ajouté avec succès !');
      setForm({
        name: '',
        category: '',
        calories_per_100g: '',
        protein: '',
        fat: '',
        carbs: '',
      });
    } catch (err) {
      console.error('Erreur ajout aliment :', err);
      alert('Erreur lors de l’ajout.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nom de l'aliment"
      />
      <Input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Catégorie (ex : Fruit, Légume...)"
      />
      <Input
        name="calories_per_100g"
        type="number"
        value={form.calories_per_100g}
        onChange={handleChange}
        placeholder="Calories pour 100g"
      />
      <Input
        name="protein"
        type="number"
        value={form.protein}
        onChange={handleChange}
        placeholder="Protéines"
      />
      <Input
        name="fat"
        type="number"
        value={form.fat}
        onChange={handleChange}
        placeholder="Lipides"
      />
      <Input
        name="carbs"
        type="number"
        value={form.carbs}
        onChange={handleChange}
        placeholder="Glucides"
      />
      <Button type="submit">Ajouter</Button>
    </form>
  );
};
