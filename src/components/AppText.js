import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AppText({ color, size, weight, children }) {
  return (
    <View>
      <Text style={{ color: color, fontSize: size, fontWeight: weight }}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AppText;
