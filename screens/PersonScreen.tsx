import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { Header } from "../components/UserScreen/Header/Header";
import { Body } from "../components/UserScreen/Body/Body";

export const PersonScreen = () => {
  return (
    <View>
      <Header />
      <Body />
    </View>
  );
};
