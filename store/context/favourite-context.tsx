import { createContext, ReactNode, useState } from "react";

interface FavoritesContextType {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const initialState: FavoritesContextType = {
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
};

export const FavoritesContext =
  createContext<FavoritesContextType>(initialState);

interface FavoritesContextProviderProps {
  children: ReactNode;
}

const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavouriteMealIds((currentFavouriteIds) => [...currentFavouriteIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavouriteMealIds((currentFavouriteIds) =>
      currentFavouriteIds.filter((mealId) => mealId !== id),
    );
  };

  const newState = {
    ids: favouriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={newState}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
