export interface HistoryEntry {
  id: string;
  user_id: string;
  date: string; // format ISO
  total_calories: number;
  total_protein: number;
  total_fat: number;
  total_carbs: number;
  created_at?: string;
  updated_at?: string;
}


export interface NewHistoryEntry {
  user_id: string;
  date: string; 
  total_calories: number;
  total_protein: number;
  total_fat: number;
  total_carbs: number;
}

export interface HistoryUpdate {
  total_calories?: number;
  total_protein?: number;
  total_fat?: number;
  total_carbs?: number;
}
