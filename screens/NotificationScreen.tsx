import React from "react";
import { View } from "react-native";

import { Header } from "../components/NotificationScreen/Header/Header";
import { Notifications } from "../components/NotificationScreen/Body/Notifications";
import { Update } from "../components/NotificationScreen/Body/Update";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export const NotificationScreen = () => {
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
        }}
      >
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{ title: "Thông báo của tôi" }}
        />
        <Tab.Screen
          name="Update"
          component={Update}
          options={{ title: " Cập nhật người bán" }}
        />
      </Tab.Navigator>
    </View>
  );
};
