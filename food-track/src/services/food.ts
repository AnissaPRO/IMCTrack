import db from '../config/db';
import { Food } from '../models/food';

export const getAllFoods = async (): Promise<Food[]> => {
  const result = await db.query('SELECT id, name, calories_per_100g, protein, fat, carbs, category, created_at FROM food_items');
  return result.rows;
};