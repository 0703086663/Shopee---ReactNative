import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

export const ThirdElement = () => {
  return (
    <View>
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"bulb-outline"}
            size={24}
            color={"tomato"}
          />
          <Text>Khách hàng thân thiết </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.65}
          style={styles.rowIconTextWithNavRight}
          onPress={() => {
            Alert.alert("Lịch sử", "Đây là lịch sử mua hàng!");
          }}
        >
          <Text style={styles.secondaryText}>Thành viên</Text>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"md-arrow-forward"}
            size={14}
            color={"grey"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"camera-outline"}
            size={24}
            color={"#ffb640"}
          />
          <Text>Shopee Live </Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"heart-outline"}
            size={24}
            color={"red"}
          />
          <Text>Đã thích </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.65}
          style={styles.rowIconTextWithNavRight}
          onPress={() => {
            Alert.alert("Lịch sử", "Đây là lịch sử mua hàng!");
          }}
        >
          <Text style={styles.secondaryText}>0 Like</Text>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"md-arrow-forward"}
            size={14}
            color={"grey"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"time-outline"}
            size={24}
            color={"darkblue"}
          />
          <Text>Đã xem gần đây </Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"cash-outline"}
            size={24}
            color={"#ffb640"}
          />
          <Text>Shopee Xu </Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"star-outline"}
            size={24}
            color={"green"}
          />
          <Text>Đánh giá của tôi </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.65}
          style={styles.rowIconTextWithNavRight}
          onPress={() => {
            Alert.alert("Lịch sử", "Đây là lịch sử mua hàng!");
          }}
        >
          <Text style={styles.secondaryText}>
            0 Xu <Badge status={"error"} />
          </Text>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"md-arrow-forward"}
            size={14}
            color={"grey"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"gift-outline"}
            size={24}
            color={"tomato"}
          />
          <Text>Gói Siêu Voucher </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.65}
          style={styles.rowIconTextWithNavRight}
          onPress={() => {
            Alert.alert("Lịch sử", "Đây là lịch sử mua hàng!");
          }}
        >
          <Text style={styles.secondaryText}>Tiết kiệm đến 120K</Text>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"md-arrow-forward"}
            size={14}
            color={"grey"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"mail-outline"}
            size={24}
            color={"darkblue"}
          />
          <Text>Giới thiệu bạn bè </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.65}
          style={styles.rowIconTextWithNavRight}
          onPress={() => {
            Alert.alert("Lịch sử", "Đây là lịch sử mua hàng!");
          }}
        >
          <Text style={styles.secondaryText}>Mời bạn, nhận Xu</Text>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"md-arrow-forward"}
            size={14}
            color={"grey"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
    </View>
  );
};
