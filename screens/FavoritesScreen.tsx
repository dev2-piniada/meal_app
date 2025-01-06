import { StyleSheet, View, Text } from "react-native";
import { FavoritesContext } from "../store/favourite-context";
import { useContext, useEffect, useState } from "react";
import { Meal } from "../models/types";
import { MEALS } from "../data/types";
import MealList from "../components/MealList/MealList";

const FavoritesScreen = () => {
  const favoritesMealsContext = useContext(FavoritesContext);
  const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);

  useEffect(() => {
    let favouriteMeals = MEALS.filter((meal) =>
      favoritesMealsContext.ids.includes(meal.id),
    );
    setFavoriteMeals(favouriteMeals);
  }, [favoritesMealsContext]);

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
    color: "white",
  },
});
