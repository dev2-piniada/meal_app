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
