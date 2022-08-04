import React from "react";
import { View, Text, Image } from "react-native";
import { Badge } from "react-native-elements";
import { HeaderIcons } from "../../HeaderIcons";

import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import Avatar from "../../../assets/avatar.png";

export const Header = () => {
  return (
    <View style={styles.topHeader}>
      <View style={[, { flexDirection: "row" }]}>
        <View style={styles.topLeftHeader}>
          <View style={styles.topLeftHeaderItems}>
            <Text style={styles.tomatoText}>Shop của tôi</Text>
            <Ionicons name={"arrow-forward"} size={16} color={"tomato"} />
          </View>
        </View>
        <View style={styles.topCenterHeader}></View>
        <View style={styles.topRightHeader}>
          <HeaderIcons />
          <Ionicons
            style={styles.iconTopRight}
            name={"settings-outline"}
            size={28}
            color={"white"}
          />
        </View>
      </View>

      <View style={styles.bottomHeader}>
        <View style={styles.bottomLeftHeader}>
          <Image style={styles.avatar} source={Avatar} />
        </View>
        <View style={styles.bottomRightHeader}>
          <Text style={styles.bottomRightName}>zyxell</Text>
          {/* <View style={{ flexDirection: "row" }}>
            <View style={styles.bottomRightRoleBadge}>
              <Text style={styles.bottomRightRole}>Thanh vien</Text>
              <Ionicons name={"arrow-forward"} size={12} />
            </View>
          </View> */}
          <View style={{ flexDirection: "row" }}>
            <View style={styles.bottomRightRoleBadge}>
              <Text style={[styles.tomatoText, { fontSize: 11 }]}>
                Thành Viên
              </Text>
              <Ionicons name={"arrow-forward"} size={16} color={"tomato"} />
            </View>
          </View>
          <View style={[, { flexDirection: "row" }]}>
            <Text style={styles.bottomRightFollow}>
              Người theo dõi{" "}
              <Text style={styles.bottomRightFollowNumber}>2</Text>
            </Text>
            <Text> | </Text>
            <Text style={styles.bottomRightFollow}>
              Đang theo dõi{" "}
              <Text style={styles.bottomRightFollowNumber}>8</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
