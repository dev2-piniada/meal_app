import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/types";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = () => {
  const navigation = useNavigation();

  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigation.navigate({
        name: "MealsOverview",
        params: {
          categoryId: itemData.item.id,
        },
      });
    };
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
