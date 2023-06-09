import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { lightMode } from "../utils/color";
import Icon from "./Icon";

function MenuBurger({ style }) {
  return (
    <View
      style={[
        styles.icon,
        Platform.OS === "android" ? styles.elevation : styles.shadowProp,
        { ...style },
      ]}
    >
      <Icon size={30} color="black" name="menu-outline" />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: lightMode.whiteColor,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 100,
  },
  elevation: {
    shadowColor: "#52006A",
    elevation: 20,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default MenuBurger;
