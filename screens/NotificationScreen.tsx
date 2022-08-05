import React from "react";
import { View } from "react-native";

import { Header } from "../components/NotificationScreen/Header/Header";
import { Body } from "../components/NotificationScreen/Body/Body";

export const NotificationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Body />
    </View>
  );
};
