import React from "react";
import { View, StyleSheet } from "react-native";

import { Header } from "../components/HomeScreen/Header/Header";
import { Body } from "../components/HomeScreen/Body/Body";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
});
