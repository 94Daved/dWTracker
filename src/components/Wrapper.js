import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Wrapper({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default Wrapper;
