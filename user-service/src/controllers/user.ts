import { Request, Response } from 'express';
import * as userService from '../services/user';

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser = await userService.createUser({ name, email, password });
  res.status(201).json(newUser);
};

export const updateUser = async (req: Request, res: Response) => {
  const updated = await userService.updateUser(req.params.id, req.body);
  if (!updated) res.status(404).json({ message: 'User not found' });
  res.json(updated);
};

export const deleteUser = async (req: Request, res: Response) => {
  const success = await userService.deleteUser(req.params.id);
  if (!success) res.status(404).json({ message: 'User not found' });
  res.status(204).send();
};


/*import { loadData } from '../models/user';

function list(req:any, res:any) {
  const users = loadData('users')
  res.status(200).json(users);
}

export {list}*/