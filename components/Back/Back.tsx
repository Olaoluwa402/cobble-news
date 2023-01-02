import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Back = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back-sharp" size={30} style={styles.iconColor} />
      <Text style={styles.text}>back</Text>
    </Pressable>
  );
};

export default Back;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconColor: {
    color: "#2b2b2b",
    marginRight: 10,
  },
  text: {
    fontWeight: "700",
    color: "#2b2b2b",
  },
});
