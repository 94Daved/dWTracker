import { View, StyleSheet, Text } from "react-native";
import { lightMode, fonts } from "../utils/color";

function Button({ text = "ADD A VEHICLE" }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
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
export default Button;