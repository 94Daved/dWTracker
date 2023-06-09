import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Icon({ name = "add-outline", size = 40, color = "black" }) {
  return (
    <View style={styles.container}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default Icon;
