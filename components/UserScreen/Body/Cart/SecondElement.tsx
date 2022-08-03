import React from "react";
import { View, Text } from "react-native";
import { Badge } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

export const SecondElement = () => {
  return (
    <View>
      {/* Section 1 */}
      <View style={styles.rowIconWithText}>
        <Ionicons name={"md-wallet-outline"} size={30} color={"tomato"} />
        <Text style={styles.rowTextBehindIcon}>Tiện ích của tôi </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.rowBigIconWithTextUnder}>
        <View style={styles.bigIconTop}>
          <Ionicons name={"wallet-outline"} size={30} color={"tomato"} />
          <Text style={styles.textUnderIcon}>Ví ShoppePay</Text>
          <Text style={styles.secondaryText}>Sử dụng ngay</Text>
        </View>
        <View style={styles.bigIconTop}>
          <Ionicons name={"cash-outline"} size={30} color={"tomato"} />
          <Text style={styles.textUnderIcon}>
            Shopee Xu <Badge status={"error"} />
          </Text>
          <Text style={styles.textBadgeNoti}>0 Xu</Text>
        </View>
        <View style={styles.bigIconTop}>
          <Ionicons name={"newspaper-outline"} size={30} color={"tomato"} />
          <Text style={styles.textUnderIcon}>
             Kho Voucher <Badge status={"error"} />
          </Text>
          <Text style={styles.textBadgeNoti}>31 Voucher</Text>
        </View>
      </View>
      <View style={styles.hr} />
    </View>
  );
};
