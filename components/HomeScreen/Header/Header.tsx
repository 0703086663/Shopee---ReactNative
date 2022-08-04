import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import test from "../../../assets/code.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HeaderIcons } from "../../HeaderIcons";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarIcon}>
            <Ionicons
              name={"ios-search-outline"}
              color={"grey"}
              size={28}
            ></Ionicons>
          </View>
          <TextInput style={{ flex: 1 }}></TextInput>
          <View style={styles.searchBarIcon}>
            <Ionicons
              name={"ios-camera-outline"}
              color={"grey"}
              size={28}
            ></Ionicons>
          </View>
        </View>
        <View style={styles.topLeftActionContainer}>
          <HeaderIcons iconColor={"white"} />
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Image style={styles.carousel} source={test}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: "column",
    flex: 2,
    backgroundColor: "#f19a6f",
  },
  searchContainer: {
    flex: 1 / 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    flex: 4 / 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  searchBarIcon: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  topLeftActionContainer: {
    flexDirection: "row",
    flex: 1 / 5,
    alignItems: "center",
  },
  topLeftAction: {
    flex: 1,
    alignItems: "center",
  },
  carouselContainer: {
    flex: 4 / 5,
  },
  carousel: {
    height: "100%",
    width: "100%",
  },
  badgeIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    zIndex: 1,
  },
});
