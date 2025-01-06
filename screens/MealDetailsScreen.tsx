import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { MEALS } from "../data/types";
import { Meal } from "../models/types";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";

const MealDetailsScreen = () => {
  const [mealId, setMealId] = useState<string | null>(null);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const route = useRoute();
  const navigation = useNavigation();

  const headerButtonPressHandler = () => {
    console.log("Pressed!");
  };

  useEffect(() => {
    if (route.params) {
      const { mealId } = route.params;
      setMealId(mealId);
    }
  }, [route]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  useEffect(() => {
    if (mealId) {
      const filteredMeal = MEALS.find((meal) => meal.id === mealId);
      if (filteredMeal) {
        setSelectedMeal(filteredMeal);
      } else {
        setSelectedMeal(null);
      }
    }
  }, [mealId]);

  useEffect(() => {
    if (selectedMeal && navigation) {
      navigation.setOptions({
        title: selectedMeal.title,
      });
    }
  }, [selectedMeal, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      {selectedMeal && (
        <>
          <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
          <Text style={styles.title}>{selectedMeal.title}</Text>
          <MealDetail mealItem={selectedMeal} textStyle={styles.detailText} />
          <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
              <Subtitle>Ingredients</Subtitle>
              <List data={selectedMeal.ingredients} />
              <Subtitle>Steps</Subtitle>
              <List data={selectedMeal.steps} />
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
