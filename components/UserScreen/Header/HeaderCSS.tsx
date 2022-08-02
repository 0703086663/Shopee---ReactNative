import React from "react";
import { StyleSheet } from "react-native";

export const HeaderCSS = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    flex: 1,
    padding: 70,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    // marginLeft: 20,
  },
  top: {
    // maxHeight: 87,
    flex: 1,
    backgroundColor: "green",
  },
  body: { flex: 4, backgroundColor: "yellow" },
});
