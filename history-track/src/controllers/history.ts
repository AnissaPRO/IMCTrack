import { Request, Response } from 'express';
import * as historyService from '../services/history';

export const createHistory = async (req: Request, res: Response) => {
  try {
    const {
      user_id,
      date,
      total_calories,
      total_protein,
      total_fat,
      total_carbs,
    } = req.body;

    if (!user_id || !date) {
      res.status(400).json({ error: 'user_id et date sont requis' });
    }

    const entry = await historyService.createHistory({
      user_id,
      date,
      total_calories,
      total_protein,
      total_fat,
      total_carbs,
    });
    res.status(201).json(entry);
  } catch (error) {
    console.error('Erreur sauvegarde historique :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getHistory = async (req: Request, res: Response) => {
  const historique = await historyService.getAllHistory();
  res.json(historique);
};
