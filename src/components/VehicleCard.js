import React from "react";
import { View, StyleSheet, Image } from "react-native";
import IconText from "./IconText";
import { lightMode } from "../utils/color";
import Icon from "./Icon";

function VehicleCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          style={styles.image}
          src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=300"
        />
        <View style={styles.iconTextContainer}>
          <View style={styles.leftCorner}>
            <IconText
              name="car-sport-outline"
              size={25}
              color={lightMode.blackColor}
              style={styles.title}
              title="Mazda - Madza tiger"
            />
            <IconText
              name="checkmark-outline"
              size={25}
              color={lightMode.greenColor}
              style={styles.subtitle}
              title="Active"
            />
          </View>
          <View style={styles.rightCorner}>
            <Icon
              name="ellipsis-vertical-outline"
              size={25}
              color={lightMode.strongColor}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  main: {
    width: "100%",
    height: 280,

    borderRadius: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 15,
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
