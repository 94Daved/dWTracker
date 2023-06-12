import { View, StyleSheet, Text, Pressable } from "react-native";
import { lightMode, fonts } from "../utils/color";

function AppButton({ text = "ADD A VEHICLE", style }) {
  const handlePress = () => {
    console.log("Hi");
  };
  return (
    <Pressable style={[styles.container, { ...style }]} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: lightMode.primaryColor,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  text: {
    color: lightMode.whiteColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fonts.mediumFontSize,
  },
});
export default AppButton;
