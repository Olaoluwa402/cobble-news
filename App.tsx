import "react-native-gesture-handler";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import RootStack from "./Navigators/RootStack";
import { Provider } from "./context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="dark" />
        <Provider>
          <RootStack />
        </Provider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
