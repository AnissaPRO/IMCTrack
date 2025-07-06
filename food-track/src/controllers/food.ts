import { Request, Response } from 'express';
import * as foodService from '../services/food';

export const getFoods = async (req: Request, res: Response) => {
  const users = await foodService.getAllFoods();
  res.json(users);
};

export const addFood = async (req: Request, res: Response) => {
  const { name, calories_per_100g, protein, fat, carb, category } = req.body;
  const newFood = await foodService.addFood({
    name,
    calories_per_100g,
    protein,
    fat,
    carb,
    category,
  });
  res.status(201).json(newFood);
};
