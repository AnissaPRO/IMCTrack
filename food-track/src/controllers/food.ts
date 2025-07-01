import { Request, Response } from 'express';
import * as foodService from '../services/food';


export const getFoods = async (req: Request, res: Response) => {
  const users = await foodService.getAllFoods();
  res.json(users);
};