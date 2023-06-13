import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { lightMode } from "../src/utils/color";
import { useTheme } from "@react-navigation/native";

function Payments(props) {
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
      <Text>Payments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightMode.whiteColor,
  },
});
export default Payments;
