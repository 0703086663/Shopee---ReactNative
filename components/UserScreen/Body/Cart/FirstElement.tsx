import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

export const FirstElement = () => {
  return (
    <View>
      {/* Section 1 */}
      <View style={styles.rowIconWithText}>
        <Ionicons name={"md-cloud-circle"} size={30} color={"tomato"} />
        <Text style={styles.rowTextBehindIcon}>8.8 Siêu Sale Giảm 50% </Text>
        <Text style={styles.badge}>Mới</Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowBigIconWithTextUnder}>
        <View style={styles.bigIconTop}>
          <Ionicons name={"md-cloud-circle"} size={46} color={"tomato"} />
          <Text style={styles.textUnderIcon}>Trang chính</Text>
        </View>
        <View style={styles.bigIconTop}>
          <Ionicons
            name={"people-circle-outline"}
            size={46}
            color={"darkblue"}
          />
          <Text style={styles.textUnderIcon}>Khung giờ sale</Text>
        </View>
        <View style={styles.bigIconTop}>
          <Ionicons name={"disc"} size={46} color={"#ffb640"} />
          <Text style={styles.textUnderIcon}>Mã giảm giá</Text>
        </View>
        <View style={styles.bigIconTop}>
          <Ionicons name={"earth"} size={46} color={"red"} />
          <Text style={styles.textUnderIcon}>Freeship 70k</Text>
        </View>
      </View>
      <View style={styles.hr} />

      {/* Section 2 */}
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"md-cart-outline"}
            size={30}
            color={"darkblue"}
          />
          <Text>Đơn mua</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.65}
          style={styles.rowIconTextWithNavRight}
          onPress={() => {
            Alert.alert("Lịch sử", "Đây là lịch sử mua hàng!");
          }}
        >
          <Text style={styles.secondaryText}>Xem lịch sử mua hàng</Text>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"md-arrow-forward"}
            size={14}
            color={"grey"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />

      {/* Section 3 */}
      <View>
        <View style={styles.rowBigIconWithTextUnder}>
          <View style={styles.bigIconTop}>
            <Ionicons name={"md-wallet-outline"} size={32} />
            <Text style={styles.textUnderIcon}>Chờ xác nhận</Text>
          </View>
          <View style={styles.bigIconTop}>
            <Ionicons name={"logo-dropbox"} size={32} />
            <Text style={styles.textUnderIcon}>Chờ lấy hàng</Text>
          </View>
          <View style={styles.bigIconTop}>
            <Ionicons name={"car-outline"} size={32} />
            <Text style={styles.textUnderIcon}>Đang giao</Text>
          </View>
          <View style={styles.bigIconTop}>
            <Ionicons name={"star-outline"} size={32} />
            <Text style={styles.textUnderIcon}>Đánh giá</Text>
          </View>
        </View>
      </View>

      <View style={styles.hr} />

      {/* Section 4 */}
      <View style={styles.rowIconTextWithNav}>
        <View style={styles.rowIconTextWithNavLeft}>
          <Ionicons
            style={styles.rowAboveIcon}
            name={"ios-phone-portrait-outline"}
            size={30}
            color={"green"}
          />
          <Text>Đơn mua</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.65}
          style={styles.rowIconTextWithNavRight}
          onPress={() => {
            Alert.alert("Lịch sử", "Đây là lịch sử mua hàng!");
          }}
        >
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
