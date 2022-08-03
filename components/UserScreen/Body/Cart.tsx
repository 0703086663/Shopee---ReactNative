import React from "react";
import { View, Text, Alert, FlatList, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { FirstElement } from "./Cart/FirstElement";
import { SecondElement } from "./Cart/SecondElement";
import { ThirdElement } from "./Cart/ThirdElement";

import { styles } from "./styles";

export const Cart = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: "85%" }}>
      <View>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationIcon}>
            <Ionicons name={"ios-mail-outline"} size={20} color={"blue"} />
          </View>
          <View>
            <Text style={styles.notificationMsg}>
              Vui lòng xác minh email của bạn để bảo vệ tài khoản và nhận những
              cập nhật đơn hàng quan trọng.{" "}
              <Text
                style={{ color: "blue", flexWrap: "wrap", flex: 1 }}
                onPress={() => {
                  Alert.alert(
                    "Xác minh",
                    "Tài khoản của bạn đã được xác minh!"
                  );
                }}
              >
                Xác minh ngay.
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.body}>
            <FirstElement />
          </View>
          <View style={styles.body}>
            <SecondElement />
          </View>
          <View style={styles.body}>
            <ThirdElement />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
