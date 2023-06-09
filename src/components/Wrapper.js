import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Wrapper({ children, otherProps }) {
  console.log({ ...otherProps });
  return <View style={[styles.container, { ...otherProps }]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default Wrapper;
