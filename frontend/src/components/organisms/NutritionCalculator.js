import { useState, useEffect } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { CalculFood } from '../../helpers/api';

export const NutritionCalculator = () => {
  const [catalog, setCatalog] = useState([]);
  const [form, setForm] = useState({
    selectedFoodId: '',
    quantity: ''
  });
  const [meal, setMeal] = useState([]); // liste des aliments ajoutés

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const res = await CalculFood();
        setCatalog(res.data);
      } catch (err) {
        console.error('Erreur chargement aliments', err);
      }
    };
    loadFoods();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddFood = (e) => {
    e.preventDefault();

    const foodId = form.selectedFoodId;
    const quantity = parseFloat(form.quantity);

    if (!foodId) {
      alert("Veuillez sélectionner un aliment.");
      return;
    }

    const food = catalog.find(f => f.id === foodId);

    if (!food) {
      alert("Aliment introuvable.");
      return;
    }

    if (isNaN(quantity) || quantity <= 0) {
      alert("Quantité invalide.");
      return;
    }

    const calc = (value) => (value * quantity) / 100;

    const entry = {
      id: crypto.randomUUID(), 
      name: food.name,
      quantity,
      calories: calc(food.calories_per_100g),
      protein: calc(food.protein),
      fat: calc(food.fat),
      carbs: calc(food.carbs)
    };

    setMeal(prev => [...prev, entry]);
    setForm({ selectedFoodId: '', quantity: '' });
  };
  const handleRemoveFood = (idToRemove) => {
  setMeal(prev => prev.filter(item => item.id !== idToRemove));
};


  const total = meal.reduce((acc, item) => ({
    calories: acc.calories + item.calories,
    protein: acc.protein + item.protein,
    fat: acc.fat + item.fat,
    carbs: acc.carbs + item.carbs
  }), { calories: 0, protein: 0, fat: 0, carbs: 0 });

  return (
    <div>
      <h2>Calculateur nutritionnel</h2>
      <form onSubmit={handleAddFood}>
        <select name="selectedFoodId" value={form.selectedFoodId} onChange={handleChange}>
          <option value="">-- Choisir un aliment --</option>
          {catalog.map(food => (
            <option key={food.id} value={food.id}>
              {food.name} ({food.calories_per_100g} kcal/100g)
            </option>
          ))}
        </select>

        <Input
          name="quantity"
          type="number"
          placeholder="Quantité en grammes"
          value={form.quantity}
          onChange={handleChange}
          min="0"
        />

        <Button type="submit">Ajouter</Button>
      </form>

      {meal.length > 0 && (
        <div style={{ marginTop: '2em' }}>
          <h3>Aliments ajoutés :</h3>
          <ul>
            {meal.map(item => (
              <li key={item.id}>
                {item.quantity}g de {item.name} — 
                {item.calories.toFixed(1)} kcal, 
                {item.protein.toFixed(1)}g prot., 
                {item.fat.toFixed(1)}g lip., 
                {item.carbs.toFixed(1)}g gluc.
               <Button onClick={() => handleRemoveFood(item.id)} style={{ marginLeft: '1em' }}>
                Retirer
               </Button>
            </li>
              
            ))}
            
          </ul>

          <h4>Totaux de la journée :</h4>
          <ul>
            <li>Calories totales : {total.calories.toFixed(1)} kcal</li>
            <li>Protéines totales : {total.protein.toFixed(1)} g</li>
            <li>Lipides totaux : {total.fat.toFixed(1)} g</li>
            <li>Glucides totaux : {total.carbs.toFixed(1)} g</li>
          </ul>
        </div>
      )}
    </div>
  );
};
