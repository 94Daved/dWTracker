import { StyleSheet, Text, View } from "react-native";
import Button from "../src/components/Button";
import Icon from "../src/components/Icon";
import Wrapper from "../src/components/Wrapper";
import AppText from "../src/components/AppText";
import { fonts, lightMode } from "../src/utils/color";
import MapTracker from "../src/components/MapTracker";

export default function Page() {
  return (
    // <Wrapper>
    //   <View style={styles.container}>
    //     <View style={styles.icon}>
    //       <Icon size={30} color="black" name="menu-outline" />
    //     </View>
    //     <AppText style={styles.text}>No registered Vehicle</AppText>
    //     <Button />
    //   </View>
    // </Wrapper>
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon size={30} color="black" name="menu-outline" />
      </View>
      <MapTracker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: lightMode.whiteColor,
    shadowColor: "#52006A",
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 60,
    left: 10,
    zIndex: 100,
  },
  text: {
    color: lightMode.blackColor,
    fontSize: fonts.mediumFontSize,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 100,
  },
});
