import React from "react";
import { View, useWindowDimensions } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

import { Header } from "../components/FeedScreen/Header/Header";
import { Body } from "../components/FeedScreen/Body/Body";

export const FeedScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarIndicatorStyle: {
            backgroundColor: "tomato",
          },
          tabBarLabelStyle: { textTransform: "none" },
          tabBarStyle: {
            height: 40,
          },
        }}
      >
        <Tab.Screen
          name="1"
          component={Body}
          options={{ title: "Thời Gian" }}
        />
        <Tab.Screen name="2" component={Body} options={{ title: "Minigame" }} />
        <Tab.Screen name="3" component={Body} options={{ title: "Cheap" }} />
        <Tab.Screen name="4" component={Body} options={{ title: "Voucher" }} />
      </Tab.Navigator>
    </View>
  );
};
