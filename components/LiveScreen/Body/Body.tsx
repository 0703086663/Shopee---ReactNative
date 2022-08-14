import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { TopBody } from "./TopBody";
import { CarouselBody } from "./CarouselBody";
import { MainBody } from "./MainBody";

export const Body = () => {
  return (
    <ScrollView style={styles.container}>
      <TopBody />
      <CarouselBody />
      <MainBody />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    marginBottom: 80,
  },
});
