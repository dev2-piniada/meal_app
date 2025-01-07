import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../../data/types";

interface FavoritesSliceType {
  ids: string[];
}

const initialState: FavoritesSliceType = {
  ids: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export const addFavourite = favouriteSlice.actions.addFavorite;
export const removeFavourite = favouriteSlice.actions.removeFavorite;

export default favouriteSlice;

export const favouriteReducer = favouriteSlice.reducer;

export const selectFavouriteMeals = (state: any) => {
  return MEALS.filter((meal) => state.favourite.ids.includes(meal.id));
};

export const selectFavouriteMealsIds = (state: any) => state.favourite.ids;
