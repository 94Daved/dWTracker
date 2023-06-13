import React from "react";
import { View, StyleSheet } from "react-native";
import { lightMode } from "../src/utils/color";
import { useTheme } from "@react-navigation/native";

function ThemeWrapper({ children }) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.dark
            ? theme.colors.background
            : lightMode.whiteColor,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default ThemeWrapper;
