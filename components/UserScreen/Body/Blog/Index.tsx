import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export const Index = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="times" size={150} color="grey" />
      <Text>Chưa có bài viết nào</Text>

      <TouchableOpacity
        activeOpacity={0.65}
        style={styles.plusIcon}
        onPress={() => {
          Alert.alert("Tạo post", "Đây là trang tạo post!");
        }}
      >
        <View>
          <AntDesign name="pluscircle" size={56} color="tomato" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
