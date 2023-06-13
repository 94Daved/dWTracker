import { StyleSheet, Text, View, FlatList } from "react-native";
import MenuBurger from "../src/components/MenuBurger";
import BottomSheetComponent from "../src/components/BottomSheet";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export default function Page() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MenuBurger
        style={styles.icon}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
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
