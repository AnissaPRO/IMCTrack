import db from '../config/db';
import { Food, NewFood } from '../models/food';

export const getAllFoods = async (): Promise<Food[]> => {
  const result = await db.query(
    'SELECT id, name, calories_per_100g, protein, fat, carbs, category, created_at FROM food_items'
  );
  return result.rows;
};
export const addFood = async (food: NewFood): Promise<Food> => {
  const result = await db.query(
    `INSERT INTO food_items (name, calories_per_100g, protein, fat, carbs, category)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, name, calories_per_100g, protein, fat, carbs, category`,
    [
      food.name,
      food.calories_per_100g,
      food.protein || 0,
      food.fat || 0,
      food.carb || 0,
      food.category,
    ]
  );

  return result.rows[0];
};
