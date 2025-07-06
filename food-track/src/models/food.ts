export interface Food {
  id: string;
  name: string;
  calories_per_100g: number;
  protein?: number;
  fat?: number;
  carb?: number;
  category?: string;
  created_at?: string; // date ISO en string
}

export interface NewFood {
  name: string;
  calories_per_100g: number;
  protein?: number;
  fat?: number;
  carb?: number;
  category?: string;
}

export interface FoodUpdate {
  name?: string;
  calories_per_100g: number;
  protein?: number;
  fat?: number;
  carb?: number;
  category?: string;
}
