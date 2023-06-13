import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import IconText from "./IconText";
import { lightMode } from "../utils/color";
import Icon from "./Icon";
import { Link, useNavigation } from "expo-router";
import { Text } from "react-native";
import AppText from "./AppText";

function VehicleCard({}) {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          style={styles.image}
          src="https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=300"
        />
        <View style={styles.iconTextContainer}>
          <View style={styles.leftCorner}>
            <IconText
              name="car-sport-outline"
              color={lightMode.blackColor}
              title="Mazada- Accent V8"
              style={styles.title}
            />
            <IconText
              name="checkmark-outline"
              color={lightMode.greenColor}
              title="Active"
              style={styles.subtitle}
            />
          </View>
          <Link href="/vehicle/123">
            <View style={styles.rightCorner}>
              <Icon
                name="ellipsis-vertical-outline"
                color={lightMode.medieumColor}
                size={40}
              />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 15,
  },
  main: {
    width: "100%",
    height: 280,
    backgroundColor: "red",
    borderRadius: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    // aspectRatio: 1,
    height: 200,
    marginBottom: 10,
  },
  leftCorner: { flex: 1 },
  rightCorner: {
    height: 50,
    width: 50,
    borderRadius: 40,
    borderColor: lightMode.medieumColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTextContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    // backgroundColor: "green",
  },
  title: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  subtitle: {
    color: lightMode.strongColor,
  },
});
export default VehicleCard;
