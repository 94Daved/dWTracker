import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import VehicleCard from "../../src/components/VehicleCard";
import { lightMode } from "../../src/utils/color";
import { useTheme } from "@react-navigation/native";
import { CARS } from "../../src/utils/data";

function vehicles(props) {
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
      <FlatList
        data={CARS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <VehicleCard />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightMode.whiteColor,
  },
});
export default vehicles;
