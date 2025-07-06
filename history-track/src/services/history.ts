import db from '../config/db';
import { HistoryEntry, NewHistoryEntry } from '../models/history';

export const createHistory = async (entry: NewHistoryEntry): Promise<HistoryEntry> => {
    const query = `
    INSERT INTO history (
      user_id, date, total_calories, total_protein, total_fat, total_carbs
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, user_id, date, total_calories, total_protein, total_fat, total_carbs, created_at;
  `;
   const values = [
    entry.user_id,
    entry.date,
    entry.total_calories,
    entry.total_protein,
    entry.total_fat,
    entry.total_carbs
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};


export const getAllHistory = async (): Promise<HistoryEntry[]> => {
  const result = await db.query('SELECT id, user_id, date, total_calories, total_protein, total_fat, total_carbs, created_at FROM history;');
  return result.rows;
};