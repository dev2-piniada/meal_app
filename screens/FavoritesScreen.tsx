import { StyleSheet, View, Text } from "react-native";
import { FavoritesContext } from "../store/context/favourite-context";
import { useContext, useEffect, useState } from "react";
import { Meal } from "../models/types";
import { MEALS } from "../data/types";
import MealList from "../components/MealList/MealList";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux/store";

const FavoritesScreen = () => {
  const favoritesMealsContext = useContext(FavoritesContext);
  const favouriteMealsIds = useSelector(
    (state: RootState) => state.favouriteSliceReducer.ids,
  );

  const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);

  useEffect(() => {
    let favouriteMeals = MEALS.filter((meal) =>
      favouriteMealsIds.includes(meal.id),
    );
    setFavoriteMeals(favouriteMeals);
  }, [favouriteMealsIds]);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealList meals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});
