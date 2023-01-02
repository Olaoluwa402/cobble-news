import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../Icon/Icon";

const Tab = () => {
  return (
    <View style={styles.container}>
      <Icon name="home" text="Home" />
      <Icon name="chatbubble-sharp" text="CobbleNews" />
      <Icon name="location" text="Location" />
      <Icon name="person" text="UserInfo" />
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
});
