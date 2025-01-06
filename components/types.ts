import { Meal } from "../models/types";

export interface CategoryTitleProps {
  title: string;
  color: string;
  onPress: () => void;
}

export interface MealItemProps {
  mealItem: Meal;
  style?: any;
  textStyle?: any;
}

export interface IconButtonProps {
  icon: string;
  color: string;
  onPress: () => void;
}

export interface MealListProps {
  meals: Meal[];
}
