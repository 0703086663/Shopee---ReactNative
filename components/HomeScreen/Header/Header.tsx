import React from "react";
import { View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

import { HeaderIcons } from "../../HeaderIcons";

export const Header = () => {
  return (
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
      <View style={styles.topRightActionContainer}>
        <HeaderIcons iconColor={"white"} />
      </View>
    </View>
  );
};
