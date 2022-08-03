import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

export const ThirdElement = () => {
  return (
    <View>
      <View style={styles.rowIconWithText}>
        <Ionicons name={"bulb-outline"} size={24} color={"tomato"} />
        <Text style={styles.rowTextBehindIcon}>Khách hàng thân thiết </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconWithText}>
        <Ionicons name={"camera-outline"} size={24} color={"#ffb640"} />
        <Text style={styles.rowTextBehindIcon}>Shopee Live </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconWithText}>
        <Ionicons name={"heart-outline"} size={24} color={"red"} />
        <Text style={styles.rowTextBehindIcon}>Đã thích </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconWithText}>
        <Ionicons name={"time-outline"} size={24} color={"darkblue"} />
        <Text style={styles.rowTextBehindIcon}>Đã xem gần đây </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconWithText}>
        <Ionicons name={"wallet-outline"} size={24} color={"tomato"} />
        <Text style={styles.rowTextBehindIcon}>Số dư tài khoản Shopee </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconWithText}>
        <Ionicons name={"cash-outline"} size={24} color={"#ffb640"} />
        <Text style={styles.rowTextBehindIcon}>Shopee Xu </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconWithText}>
        <Ionicons name={"star-outline"} size={24} color={"green"} />
        <Text style={styles.rowTextBehindIcon}>Đánh giá của tôi </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconWithText}>
        <Ionicons name={"gift-outline"} size={24} color={"tomato"} />
        <Text style={styles.rowTextBehindIcon}>Gói Siêu Voucher </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconWithText}>
        <Ionicons name={"mail-outline"} size={24} color={"darkblue"} />
        <Text style={styles.rowTextBehindIcon}>Giới thiệu bạn bè </Text>
      </View>
      <View style={styles.hr} />
    </View>
  );
};
