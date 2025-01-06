import { View, Text, StyleSheet } from "react-native";
import { MealItemProps } from "./types";

const MealDetail = (props: MealItemProps) => {
  const { mealItem, style, textStyle } = props;
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{mealItem.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {mealItem.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {mealItem.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
