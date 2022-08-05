import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import test from "../../../assets/code.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

import { HeaderIcons } from "../../HeaderIcons";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarIcon}>
            <Ionicons name={"ios-search-outline"} color={"grey"} size={24} />
          </View>
          <TextInput
            style={{ flex: 1 }}
            placeholder={"THỜI TRANG SALE TỪ 1K"}
            placeholderTextColor="tomato"
          />
          <View style={styles.searchBarIcon}>
            <Ionicons name={"ios-camera-outline"} color={"grey"} size={24} />
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
