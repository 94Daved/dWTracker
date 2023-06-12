import React from "react";
import { View, StyleSheet, Text } from "react-native";
import VehicleCard from "../src/components/VehicleCard";

function vehicles(props) {
  return (
    <View style={styles.container}>
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default vehicles;
