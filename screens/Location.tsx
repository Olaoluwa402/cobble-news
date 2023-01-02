import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import BottomTab from "../components/BottomTab/BottomTab";
import Divider from "../components/Divider/Divider";
import Back from "../components/Back/Back";
import { StatusBar } from "expo-status-bar";

const Location: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.main}>
        {/* back */}
        <Back />
        <Text>Location</Text>
      </View>

      <Divider />
      <BottomTab />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
    marginTop: 40,
  },
});
