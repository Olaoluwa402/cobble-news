import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Divider = () => {
  return <View style={styles.divider}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 3,
    borderBottomColor: "#f1f1f1",
    opacity: 0.7,
  },
});
