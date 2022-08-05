import React from "react";
import { View } from "react-native";

import { Header } from "../components/CartScreen/Header/Header";
import { Body } from "../components/CartScreen/Body/Body";

export const CartScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Body />
    </View>
  );
};
