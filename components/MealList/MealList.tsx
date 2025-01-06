import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { MealListProps } from "../types";

const MealList = (props: MealListProps) => {
  const { meals } = props;

  const renderMealItem = (itemData: any) => {
    return <MealItem mealItem={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
