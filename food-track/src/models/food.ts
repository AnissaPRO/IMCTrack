export interface Food {
  id: string;
  name: string;
  calories: number;
  proteins?: number;
  fats?: number;
  carbs?: number;
  created_at?: string; // date ISO en string
}

export interface NewFood {
  name: string;
  calories: number;
  proteins?: number;
  fats?: number;
  carbs?: number;
}

export interface FoodUpdate {
  name?: string;
  calories?: number;
  proteins?: number;
  fats?: number;
  carbs?: number;
}
