import { useColorScheme } from "react-native";
import { StyleSheet, View } from "react-native";
import { withLayoutContext } from "expo-router";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

import IconText from "../src/components/IconText";
import { lightMode } from "../src/utils/color";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <IconText
          name="person-circle-outline"
          color={lightMode.strongColor}
          size={55}
          title="David Mukalay"
          subTitle="update"
          style={styles.text}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="index"
            options={{ headerShown: false, title: "Home" }}
          />
          <Drawer.Screen name="payments" options={{ title: "Payments" }} />
          <Drawer.Screen name="vehicle" options={{ title: "Vehicles" }} />
        </Drawer>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: lightMode.blackColor,
  },
});
