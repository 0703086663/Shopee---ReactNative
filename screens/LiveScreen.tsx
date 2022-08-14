import React from "react";
import { View } from "react-native";

import { Header } from "../components/LiveScreen/Header/Header";
import { Body } from "../components/LiveScreen/Body/Body";

export const LiveScreen = () => {
  return (
    <View>
      <Header />
      <Body />
    </View>
  );
};
