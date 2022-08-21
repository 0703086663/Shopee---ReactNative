import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./screens/HomeScreen";
import { LiveScreen } from "./screens/LiveScreen";
import { UserScreen } from "./screens/UserScreen";
import { NotificationScreen } from "./screens/NotificationScreen";
import { CartScreen } from "./screens/CartScreen";
import { FeedScreen } from "./screens/FeedScreen";

import { ReadComment } from "./components/FeedScreen/CRUD/ReadComment";

import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationStack"
        options={{ headerShown: false }}
        component={NotificationScreen}
      />
      <Stack.Screen
        name="CartScreen"
        options={{ headerShown: false }}
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

const LiveStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "tomato",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="FeedStack"
        options={{ headerShown: false }}
        component={FeedScreen}
      />
      <Stack.Screen
        name="ReadComment"
        options={{ headerShown: true, title: "Bình luận" }}
        component={ReadComment}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
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
          name="Live"
          component={LiveScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Feed"
          component={LiveStackNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationStackNavigator}
          options={{ title: "Thông báo", headerShown: false }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{ title: "Tôi", headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
