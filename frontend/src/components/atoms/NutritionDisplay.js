import React from 'react';

export default function NutritionDisplay({ food, quantity }) {
  if (!food || quantity <= 0) return null;

  const calcValue = (per100g) => (per100g * quantity) / 100;

  return (
    <div style={{ marginTop: '1em' }}>
      <p><strong>Valeurs pour {quantity}g de {food.name} :</strong></p>
      <ul>
        <li>Calories : {calcValue(food.calories_per_100g).toFixed(2)} kcal</li>
        <li>Protéines : {calcValue(food.protein).toFixed(2)} g</li>
        <li>Lipides : {calcValue(food.fat).toFixed(2)} g</li>
        <li>Glucides : {calcValue(food.carbs).toFixed(2)} g</li>
      </ul>
    </div>
  );
}
