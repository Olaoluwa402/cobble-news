import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../context";

const Icon = ({ name, text }) => {
  const { activeTab, setActiveTab } = useContext(GlobalContext);
  const navigation = useNavigation();

  //convert text to capitalize
  const screenName = text[0].toUpperCase() + text.slice(1);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setActiveTab(text);
        navigation.navigate(screenName);
      }}
    >
      <Ionicons
        name={name}
        size={24}
        style={[
          styles.iconColor,
          {
            color:
              activeTab.toLowerCase() == text.toLowerCase()
                ? "#000000"
                : "#9e9e9e",
          },
        ]}
      />
      {/* <Text style={styles.iconText}>{text}</Text> */}
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  iconText: { color: "#9e9e9e" },
  iconColor: { color: "#9e9e9e" },
});
