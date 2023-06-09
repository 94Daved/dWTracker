import { StyleSheet, Text, View } from "react-native";
import AppButton from "../src/components/AppButton";
import Icon from "../src/components/Icon";
import Wrapper from "../src/components/Wrapper";
import AppText from "../src/components/AppText";
import MenuBurger from "../src/components/MenuBurger";
import MapTracker from "../src/components/MapTracker";
import VehicleCard from "../src/components/VehicleCard";
import BottomSheetComponent from "../src/components/BottomSheet";

export default function Page() {
  return (
    <View style={styles.container}>
      <MenuBurger style={styles.icon} />

      <BottomSheetComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    top: 60,
    left: 10,
  },
});
