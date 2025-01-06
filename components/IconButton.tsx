import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconButtonProps } from "./types";

const IconButton = (props: IconButtonProps) => {
  const { icon, color, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1.0,
        },
      ]}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
