import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import { Colors } from "../constants/style";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Balance from "../screens/Balance";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import CobbleNews from "../screens/CobbleNews";
import UserInfo from "../screens/UserInfo";
import Location from "../screens/Location";
import avatar from "../assets/images/avatar.png";
import { CardProps } from "../components/Cards/types";
import { Ionicons } from "@expo/vector-icons";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  CobbleNews: undefined;
  Location: undefined;
  UserInfo: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.graylight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: Colors.primary100,
          headerRightContainerStyle: { paddingRight: 25 },
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerRight: () => (
            <Profile
              img={avatar}
              imgContainerStyle={{ backgroundColor: Colors.primary100 }}
            />
          ),
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CobbleNews"
          component={CobbleNews}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hello Olaoluwa"
                subText="Welcome back!"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({ route }) => ({
            headerTitle: route?.params?.alias, //avoid any undefined errors by using ? marks
            headerTitleAlign: "center",
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={Colors.primary200}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
