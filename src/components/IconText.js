import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import { lightMode } from "../utils/color";

function IconText({
  name,
  size = 30,
  color = "black",
  style,
  title,
  subTitle,
}) {
  return (
    <View style={styles.container}>
      <Icon size={size} color={color} name={name} />
      <View style={styles.textTitles}>
        <AppText style={style}>{title}</AppText>
        {subTitle && (
          <AppText style={{ color: lightMode.strongColor }}>{subTitle}</AppText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    // width: "100%",
  },
  textTitles: {},
});
export default IconText;
