import React from "react";
import { ImageBackground, View, TextInput, Text } from "react-native";
import test from "../../../assets/code.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

import { HeaderIcons } from "../../HeaderIcons";

export const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={test} resizeMode="cover" style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <View style={styles.searchBar}>
            <View style={styles.searchBarIcon}>
              <Ionicons name={"ios-search-outline"} color={"grey"} size={20} />
            </View>
            <TextInput
              style={{ flex: 1 }}
              placeholder={"THỜI TRANG SALE TỪ 1K"}
              placeholderTextColor="tomato"
            />
            <View style={styles.searchBarIcon}>
              <Ionicons name={"ios-camera-outline"} color={"grey"} size={20} />
            </View>
          </View>
          <View style={styles.topLeftActionContainer}>
            <HeaderIcons iconColor={"white"} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
