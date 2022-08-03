import React from "react";
import { View, Text, Image } from "react-native";
import { Badge } from "react-native-elements";

import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import Avatar from "../../../assets/avatar.png";

export const Header = () => {
  return (
    <View style={styles.topHeader}>
      <View style={[, { flexDirection: "row" }]}>
        <View style={styles.topLeftHeader}>
          <Text style={styles.tomatoText}>
            Shop của tôi <Ionicons name={"arrow-forward"} size={16} />
          </Text>
        </View>
        <View style={styles.topRightHeader}>
          <View>
            <Badge
              value="53"
              status="error"
              containerStyle={styles.badgeIcon}
            />
            <Ionicons
              style={styles.iconTopRight}
              name={"md-chatbubbles-outline"}
              size={28}
              color={"white"}
            />
          </View>
          <View>
            <Badge value="6" status="error" containerStyle={styles.badgeIcon} />
            <Ionicons
              style={styles.iconTopRight}
              name={"cart-outline"}
              size={28}
              color={"white"}
            />
          </View>
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
          <View style={styles.bottomRightRoleBadge}>
            <Text style={styles.bottomRightRole}>
              Thanh vien
              <Ionicons name={"arrow-forward"} size={12} />
            </Text>
          </View>
          <View style={[, { flexDirection: "row" }]}>
            <Text style={styles.bottomRightFollow}>
              Người theo dõi{" "}
              <Text style={styles.bottomRightFollowNumber}>2</Text> |{" "}
            </Text>
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
