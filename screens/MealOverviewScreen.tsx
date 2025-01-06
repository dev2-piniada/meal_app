import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Meal } from "../models/types";
import { CATEGORIES, MEALS } from "../data/types";
import MealItem from "../components/MealItem";

const MealOverviewScreen = () => {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [categoryTitle, setCategoryTitle] = useState<string | null>(null);

  const [displayedMeals, setDisplayedMeals] = useState<Meal[]>([]);

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      const { categoryId } = route.params;
      const filteredCategory = CATEGORIES.find(
        (category) => category.id === categoryId,
      );
      setCategoryTitle(filteredCategory?.title ? filteredCategory?.title : "");
      setCategoryId(categoryId);
    }
  }, [route]);

  useEffect(() => {
    if (categoryTitle && navigation) {
      navigation.setOptions({ title: categoryTitle });
    }
  }, [navigation, categoryTitle]);

  useEffect(() => {
    if (categoryId) {
      const filteredMeals = MEALS.filter((meal) =>
        meal.categories.includes(categoryId),
      );
      setDisplayedMeals(filteredMeals);
    }
  }, [categoryId]);

  const renderMealItem = (itemData: any) => {
    return <MealItem mealItem={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});