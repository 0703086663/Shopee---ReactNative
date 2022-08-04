import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollViewElements } from "./BodyElements/ScrollView";
import { ListProductsElement } from "./BodyElements/ListProducts";

export const Body = () => {
  return (
    <View style={styles.container}>
      <ScrollViewElements />
      <ListProductsElement />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
});
