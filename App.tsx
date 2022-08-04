import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./screens/HomeScreen";
import { CategoryScreen } from "./screens/CategoryScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { UserScreen } from "./screens/UserScreen";

import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator> */}

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // if (route.name === "Home") {
            //   iconName = focused ? "ios-thumbs-up" : "ios-thumbs-up-outline";
            // } else if (route.name === "Feed") {
            //   iconName = focused ? "square" : "square-outline";
            // } else if (route.name === "Live") {
            //   iconName = focused ? "camera" : "camera-outline";
            // } else if (route.name === "Notification") {
            //   iconName = focused
            //     ? "ios-notifications"
            //     : "ios-notifications-outline";
            // } else if (route.name === "User") {
            //   iconName = focused ? "person" : "person-outline";
            // }
            if (route.name === "Home") {
              if ((iconName = focused)) {
                return <Ionicons name={"ios-home"} size={size} color={color} />;
              }
              return (
                <Ionicons name={"ios-home-outline"} size={size} color={color} />
              );
            } else if (route.name === "Feed") {
              if ((iconName = focused)) {
                return <Ionicons name={"square"} size={size} color={color} />;
              }
              return (
                <Ionicons name={"square-outline"} size={size} color={color} />
              );
            } else if (route.name === "Live") {
              if ((iconName = focused)) {
                return <Ionicons name={"camera"} size={size} color={color} />;
              }
              return (
                <Ionicons name={"camera-outline"} size={size} color={color} />
              );
            } else if (route.name === "Notification") {
              if ((iconName = focused)) {
                return (
                  <Ionicons
                    name={"ios-notifications"}
                    size={size}
                    color={color}
                  />
                );
              }
              return (
                <Ionicons
                  name={"ios-notifications-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "User") {
              if ((iconName = focused)) {
                return <Ionicons name={"person"} size={size} color={color} />;
              }
              return (
                <Ionicons name={"person-outline"} size={size} color={color} />
              );
            }
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{ title: "Tôi", headerShown: false }}
        />
        <Tab.Screen name="Feed" component={CategoryScreen} />
        <Tab.Screen name="Live" component={CategoryScreen} />
        <Tab.Screen
          name="Notification"
          component={CategoryScreen}
          options={{ title: "Thông báo" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
