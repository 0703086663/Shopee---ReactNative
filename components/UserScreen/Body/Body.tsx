import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Blog } from "./Blog";
import { Cart } from "./Cart";

import { HomeScreen } from "../../../screens/HomeScreen";

import { styles } from "./styles";

const Tab = createMaterialTopTabNavigator();

export const Body = () => {
  return (
    <View style={styles.header}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarIndicatorStyle: {
            backgroundColor: "tomato",
          },
        }}
      >
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Mua hàng" }}
        />
        <Tab.Screen
          name="Blog"
          component={Blog}
          options={{ title: "Bài viết" }}
        />
      </Tab.Navigator>
    </View>
  );
};
