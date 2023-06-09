import { BackHandler, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Button from "../src/components/Button";
import Icon from "../src/components/Icon";
import Wrapper from "../src/components/Wrapper";
import AppText from "../src/components/AppText";

export default function Page() {
  return (
    <Wrapper>
      <View style={styles.main}>
        <View style={styles.icon}>
          <Icon size={30} color="black" name="menu-outline" />
        </View>
        <AppText color="red" size={16}>
          No registered Vehicle
        </AppText>
        <Button />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Constants.statusBarHeight,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
  text: {
    fontSize: 16,
  },
});
