import React from 'react';

export default function SelectFood({ catalog, selectedFoodId, onChange }) {
  return (
    <select value={selectedFoodId} onChange={onChange}>
      <option value="">-- Choisir un aliment --</option>
      {catalog.map(food => (
        <option key={food.id} value={food.id}>
          {food.name} ({food.calories_per_100g} kcal/100g)
        </option>
      ))}
    </select>
  );
}
